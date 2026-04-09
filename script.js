/* ══════════════════
   STATE + STORAGE
══════════════════ */

const USERS = {
  student: { pass: 'pass123', name: 'Priya Sharma', role: 'student' },
  admin:   { pass: 'admin123', name: 'Dr. Mehta',   role: 'admin'   }
};

let currentUser = null;
let currentRole = 'student';

const YEAR_LABELS = { sy: 'Second Year', ty: 'Third Year', fy: 'Final Year' };
const TYPE_LABELS = { notes: 'Notes', assignments: 'Assignments', experiments: 'Experiments', pyq: 'PYQs' };
const TYPE_ICONS  = { notes: '📄', assignments: '📝', experiments: '🔬', pyq: '📚' };

// ✅ LOAD FROM LOCAL STORAGE
let files = JSON.parse(localStorage.getItem('files')) || [];

let nextId = files.length ? Math.max(...files.map(f => f.id)) + 1 : 1;

// ✅ SAVE FUNCTION
function saveFiles() {
  localStorage.setItem('files', JSON.stringify(files));
}

/* ══════════════════
   LOGIN
══════════════════ */
function switchRole(role) {
  currentRole = role;
  document.getElementById('btn-student').classList.toggle('active', role === 'student');
  document.getElementById('btn-admin').classList.toggle('active', role === 'admin');
  document.getElementById('login-title').innerHTML = role === 'admin' ? 'Admin<br/>Login.' : 'Welcome<br/>back.';
  document.getElementById('login-hint').innerHTML  = role === 'admin'
    ? '<span class="hint-dot"></span> Use: <b>admin</b> / <b>admin123</b>'
    : '<span class="hint-dot"></span> Use: <b>student</b> / <b>pass123</b>';
}

function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();
  const key = currentRole === 'admin' ? 'admin' : 'student';

  if (u === key && p === USERS[key].pass) {
    currentUser = USERS[key];

    if (currentRole === 'admin') {
      window.location.href = 'admin.html';
      return;
    }

    showStudentApp();
  } else {
    document.getElementById('login-err').textContent = 'Invalid credentials';
  }
}

/* ══════════════════
   STUDENT APP
══════════════════ */
function showStudentApp() {
  document.getElementById('login-page').classList.remove('active');
  document.getElementById('student-app').classList.add('active');

  const name = currentUser.name;
  document.getElementById('st-user-name').textContent = name;

  stRenderAllGrids();
}

/* ══════════════════
   RENDER FILES
══════════════════ */
function stRenderAllGrids() {
  ['sy','ty','fy'].forEach(yr =>
    ['notes','assignments','experiments','pyq'].forEach(tp =>
      stRenderGrid(yr, tp)
    )
  );
}

function stRenderGrid(yr, tp) {
  const grid = document.getElementById('stg-' + yr + '-' + tp);
  if (!grid) return;

  const list = files.filter(f => f.year === yr && f.type === tp && f.status === 'approved');

  if (!list.length) {
    grid.innerHTML = '<p class="st-empty">No files</p>';
    return;
  }

  grid.innerHTML = list.map(f => `
    <div class="st-file-card">
      <div class="st-file-icon">${TYPE_ICONS[f.type]}</div>
      <div class="st-file-name">${f.title}</div>
      <div>${f.subject}</div>
      <button onclick="stDownload(${f.id})">Download</button>
    </div>
  `).join('');
}

/* ══════════════════
   DOWNLOAD
══════════════════ */
function stDownload(id) {
  const f = files.find(x => x.id === id);
  if (!f || !f.fileUrl) {
    alert("File not available");
    return;
  }

  const a = document.createElement('a');
  a.href = f.fileUrl;
  a.download = f.title;
  a.click();
}

/* ══════════════════
   MY UPLOADS
══════════════════ */
function stShowMyUploads() {
  stRenderMyUploads();
}

function stRenderMyUploads() {
  const mine = files.filter(f => f.uploader === currentUser.name);
  const container = document.getElementById('st-mine-body');

  if (!mine.length) {
    container.innerHTML = "No uploads yet";
    return;
  }

  container.innerHTML = mine.map(f => `
    <div>${f.title} - ${f.status}</div>
  `).join('');
}

/* ══════════════════
   UPLOAD
══════════════════ */
function stSubmitUpload() {
  const title = document.getElementById('st-up-title').value.trim();
  const subject = document.getElementById('st-up-subject').value.trim();
  const year = document.getElementById('st-up-year').value;
  const type = document.getElementById('st-up-type').value;
  const file = document.getElementById('st-up-file').files[0];

  if (!title || !subject || !file) {
    alert("Fill all fields");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    files.push({
      id: nextId++,
      year,
      type,
      title,
      subject,
      uploader: currentUser.name,
      status: 'pending',
      fileUrl: e.target.result
    });

    saveFiles();

    stRenderAllGrids();
    stRenderMyUploads();

    alert("Uploaded successfully");
  };

  reader.readAsDataURL(file);
}

/* ══════════════════
   INIT
══════════════════ */
window.onload = () => {
  stRenderAllGrids();
};