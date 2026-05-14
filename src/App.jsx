import React, { useState } from 'react';

/* ── Navbar ── */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <div className="nav-box">SA</div>
        <span className="nav-brand">SmartAdherence</span>
      </div>
      <div className="nav-search">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="2" />
          <path d="M20 20l-3-3" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 14, color: 'var(--t3)' }}>Search</span>
      </div>
      <div className="nav-right">
        {[0, 1, 2, 3].map(i => (
          <button key={i} className={'nav-ico' + (i === 1 ? ' nav-notif' : '')}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              {i === 0 && (
                <>
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
                  <path d="M9 21V12h6v9" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" strokeLinecap="round" />
                </>
              )}
              {i === 1 && (
                <>
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M13.73 21a2 2 0 01-3.46 0" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
                </>
              )}
              {i === 2 && (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
              )}
              {i === 3 && (
                <>
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="rgba(255,255,255,.5)" strokeWidth="1.7" />
                </>
              )}
            </svg>
            {i === 1 && <span className="nav-dot">8</span>}
          </button>
        ))}
        <button className="btn-invite">
          <svg width="13" height="13" fill="white" viewBox="0 0 24 24">
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Invite
        </button>
        <span className="nav-lang">EN · ES</span>
        <div className="nav-avatar">CM</div>
      </div>
    </nav>
  );
}

/* ── SCREEN 1: Program Detail ── */
function ScreenProgramDetail({ onEnroll, onAdherence }) {
  const [tab, setTab] = useState('overview');
  const tabs = [
    ['overview', 'Overview'],
    ['sms', 'SMS templates'],
    ['schedules', 'Schedules'],
    ['patients', 'Patients (214)'],
    ['team', 'Team'],
    ['audit', 'Audit'],
  ];

  return (
    <div className="container">
      <div className="bc">
        <span onClick={() => {}}>Programs</span>
        <span style={{ color: '#ccc' }}>/</span>
        <span>PG-001</span>
      </div>
      <div className="page-header">
        <div className="ph-left">
          <h1>Crocin 250 mg — Mexico</h1>
          <p>Program card. Turns templates into a concrete set of patients and activities.</p>
        </div>
        <div className="ph-right">
          <button className="btn btn-48 bs">Duplicate</button>
          <button className="btn btn-48 bs">Pause program</button>
          <button className="btn btn-48 bp" onClick={onEnroll}>
            Enroll patients
          </button>
        </div>
      </div>

      {/* Island tabs */}
      <div className="island-tabs" style={{ marginBottom: 24 }}>
        {tabs.map(([k, l]) => (
          <button
            key={k}
            className={'itab' + (tab === k ? ' active' : '')}
            onClick={() => setTab(k)}
          >
            {l}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {/* Basics */}
          <div className="card-sm cp">
            <div className="clabel">Basics</div>
            <div className="kv">
              {[
                ['Code', 'PG-001'],
                ['Pharma', 'Galderma MX'],
                ['Country', 'Mexico · es-MX'],
                ['Medication', 'Paracetamol 250 mg'],
                ['Start', '2026-02-14'],
                ['Compliance', 'COFEPRIS · PSP-track'],
              ].map(([k, v]) => (
                <div key={k} className="kv-row">
                  <span className="kv-k">{k}</span>
                  <span className="kv-v">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SMS Templates */}
          <div className="card-sm cp">
            <div className="clabel">SMS Templates</div>
            <div style={{ marginBottom: 12 }}>
              <span className="locale-badge def">es-MX · default</span>
              <span className="locale-badge">en-US</span>
            </div>
            <div className="sms">Hola María, es hora de tomar tu Crocin 250 mg. Responde CONFIRMAR.</div>
            <div style={{ marginTop: 12, fontSize: 12, color: 'var(--t3)' }}>
              3 templates · 2 locales · last edit 12 May
            </div>
          </div>

          {/* Team */}
          <div className="card-sm cp">
            <div className="clabel">Team</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['Ana López', 'nurse · 124 patients'],
                ['Diego Pérez', 'nurse · 90'],
                ['Sara Ruiz', 'coordinator'],
                ['Luis Vega', 'pharma_viewer · read-only'],
              ].map(([n, r]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="pat-av">{n.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'var(--t3)' }}>{r}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent events */}
          <div className="card-sm cp" style={{ gridColumn: 'span 2' }}>
            <div className="clabel">Recent Events</div>
            <table className="tbl">
              <tbody>
                {[
                  ['14:05', 'Ana L.', 'enrolled P-218 · Sofía Martínez'],
                  ['13:08', 'system', 'P-095 replied STOP → opt-out'],
                  ['11:30', 'Carlos M.', 'updated SMS reminder (es-MX)'],
                  ['10:14', 'Sara R.', 'called P-127 for low_adh alert'],
                ].map(([t, a, e]) => (
                  <tr key={t + e}>
                    <td style={{ width: 60, fontFamily: 'monospace', color: 'var(--t2)' }}>{t}</td>
                    <td style={{ width: 100, color: 'var(--t2)' }}>{a}</td>
                    <td>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Program health */}
          <div className="card-sm cp">
            <div className="clabel">Program Health</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['✓', 'Twilio webhook · OK', 'good'],
                ['✓', 'Templates in 2 locales', 'good'],
                ['✓', 'Consent log · 100% coverage', 'good'],
                ['!', '3 patients without TZ — falling back to default', 'warn'],
              ].map(([ic, t, c]) => (
                <div key={t} style={{ display: 'flex', gap: 8, fontSize: 14 }}>
                  <span
                    style={{
                      color: c === 'good' ? 'var(--good)' : 'var(--warn)',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {ic}
                  </span>
                  <span style={{ color: c === 'good' ? 'var(--t1)' : 'var(--t2)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'patients' && <PatientsTab onAdherence={onAdherence} />}
      {tab === 'sms' && <SMSTab />}
      {(tab === 'schedules' || tab === 'team' || tab === 'audit') && (
        <div style={{ textAlign: 'center', padding: 60, color: 'var(--t3)' }}>
          <div style={{ fontSize: 16, marginBottom: 8 }}>
            {tabs.find(t => t[0] === tab)?.[1]}
          </div>
          <div style={{ fontSize: 13 }}>Content for this tab would appear here</div>
        </div>
      )}
    </div>
  );
}

function PatientsTab({ onAdherence }) {
  const patients = [
    { id: 'P-042', name: 'María González', phone: '+52 55 1234 5678', lang: 'es-MX', adh: 88, st: 'active' },
    { id: 'P-043', name: 'Diego Ramírez', phone: '+52 55 2345 6789', lang: 'es-MX', adh: 94, st: 'active' },
    { id: 'P-044', name: 'Ana Torres', phone: '+52 55 3456 7890', lang: 'es-MX', adh: 71, st: 'active' },
    { id: 'P-045', name: 'Carlos Hernández', phone: '+52 55 4567 8901', lang: 'es-MX', adh: 62, st: 'paused' },
    { id: 'P-046', name: 'Sofía Martínez', phone: '+52 55 5678 9012', lang: 'es-MX', adh: null, st: 'draft' },
  ];

  return (
    <div className="card">
      <div
        style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 16 }}>
          Patients <span style={{ color: 'var(--t3)', fontWeight: 400 }}>· {patients.length}</span>
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <input className="finput" style={{ width: 220 }} placeholder="Search patients…" />
          <button className="btn btn-36 bp" style={{ color: '#fff' }}>
            + Enroll patient
          </button>
        </div>
      </div>
      <table className="tbl">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Phone</th>
            <th>Locale</th>
            <th style={{ textAlign: 'right' }}>Adherence</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id} onClick={() => onAdherence(p)}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="pat-av">
                    {p.name
                      .split(' ')
                      .map(w => w[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--t3)' }}>{p.id}</div>
                  </div>
                </div>
              </td>
              <td style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--t2)' }}>
                {p.phone}
              </td>
              <td style={{ fontSize: 13, color: 'var(--t2)' }}>{p.lang}</td>
              <td style={{ textAlign: 'right' }}>
                <span className={p.adh == null ? '' : p.adh >= 85 ? 'ah' : p.adh >= 70 ? 'am' : 'al'}>
                  {p.adh != null ? p.adh + '%' : '—'}
                </span>
              </td>
              <td>
                {p.st === 'active' && (
                  <span className="badge b-active">
                    <span className="bdot" style={{ background: 'var(--good)' }} />
                    active
                  </span>
                )}
                {p.st === 'paused' && (
                  <span className="badge b-paused">
                    <span className="bdot" style={{ background: 'var(--warn)' }} />
                    paused
                  </span>
                )}
                {p.st === 'draft' && (
                  <span className="badge b-draft">
                    <span className="bdot" style={{ background: 'var(--t2)' }} />
                    pending consent
                  </span>
                )}
              </td>
              <td style={{ color: 'var(--t3)', textAlign: 'right' }}>›</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SMSTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[
        {
          locale: 'es-MX (default)',
          text: 'Hola {patient_name}, es hora de tomar tu {med_name} {dose}. Responde {confirm_word} para registrar tu dosis. — Programa {program_name}',
        },
        {
          locale: 'en-US',
          text: 'Hi {patient_name}, time to take your {med_name} {dose}. Reply {confirm_word} to confirm. — Program {program_name}',
        },
      ].map(t => (
        <div key={t.locale} className="card-sm cp">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span className="locale-badge def">{t.locale}</span>
            <button className="btn btn-36 bs">Edit template</button>
          </div>
          <textarea className="ftextarea" rows={3} defaultValue={t.text} />
        </div>
      ))}
    </div>
  );
}

/* ── SCREEN 2: Patient Adherence ── */
function ScreenAdherence({ patient, onBack }) {
  const [view, setView] = useState('calendar');
  const p = patient || { name: 'María González', adh: 88, id: 'P-042' };
  const missedDays = [4, 16, 26];
  const visitDays = [10, 13];
  const days = Array.from({ length: 31 }, (_, i) => {
    const d = i + 1;
    if (d > 22) return { d, status: 'future' };
    if (missedDays.includes(d)) return { d, status: 'missed' };
    if (visitDays.includes(d)) return { d, status: 'visit' };
    return { d, status: 'confirmed' };
  });
  const [selDay, setSelDay] = useState(days.find(d => d.status === 'missed'));

  const events = [
    { time: '14 May 14:00', drug: 'Crocin 250 mg', note: 'no reply, alert sent', st: 'missed' },
    { time: '14 May 08:00', drug: 'Metformin 500', note: 'patient replied CONFIRMAR', st: 'confirmed' },
    { time: '13 May 20:00', drug: 'Metformin 500', note: 'reply in 4 min', st: 'confirmed' },
    { time: '13 May 14:00', drug: 'Crocin 250 mg', note: 'reply in 12 min', st: 'confirmed' },
    { time: '13 May 10:00', drug: 'HbA1c · visit', note: 'visit reminder sent', st: 'delivered' },
    { time: '12 May 20:00', drug: 'Metformin 500', note: 'no reply → Ana called', st: 'missed' },
  ];

  return (
    <div className="container">
      <div className="bc">
        <span onClick={onBack}>Patients</span>
        <span style={{ color: '#ccc' }}>/</span>
        <span>{p.name}</span>
        <span style={{ color: '#ccc' }}>/</span>
        <span>Adherence</span>
      </div>
      <div className="page-header">
        <div className="ph-left">
          <h1>{p.name} — adherence</h1>
        </div>
        <div className="ph-right">
          <button className="btn btn-48 bs">↓ CSV</button>
          <button className="btn btn-48 bs">Share with pharma</button>
          <button className="btn btn-48 bp">Edit schedules</button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="kpi-row">
        {[
          ['Adherence (30d)', '88%', 'good'],
          ['Confirmed', '53 / 60', ''],
          ['Missed', '7', 'warn'],
          ['Streak', '12 days', 'good'],
          ['Program', 'Crocin 250 mg', ''],
        ].map(([l, v, c]) => (
          <div key={l} className="kpi-card">
            <div className="kpi-label">{l}</div>
            <div
              className="kpi-val"
              style={{
                color: c === 'good' ? 'var(--good)' : c === 'warn' ? 'var(--warn)' : 'var(--t1)',
                fontSize: v.length > 8 ? 20 : 26,
              }}
            >
              {v}
            </div>
          </div>
        ))}
      </div>

      {/* View switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div className="island-tabs">
          {[
            ['calendar', 'Calendar'],
            ['feed', 'Feed'],
            ['heatmap', 'Heatmap'],
            ['chart', 'Chart'],
          ].map(([k, l]) => (
            <button
              key={k}
              className={'itab' + (view === k ? ' active' : '')}
              onClick={() => setView(k)}
            >
              {l}
            </button>
          ))}
        </div>
        {view === 'calendar' && (
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-36 bs">‹ April</button>
            <button className="btn btn-36 bs" style={{ fontWeight: 600 }}>
              May 2026
            </button>
            <button className="btn btn-36 bs">June ›</button>
          </div>
        )}
        {view === 'feed' && <button className="btn btn-36 bs">Filter: all events ▾</button>}
      </div>

      {view === 'calendar' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 16 }}>
          <div>
            <div className="cal-grid" style={{ marginBottom: 6 }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                <div key={d} className="cal-dname">
                  {d}
                </div>
              ))}
            </div>
            <div className="cal-grid">
              {days.map(({ d, status }) => (
                <div
                  key={d}
                  className={
                    'cal-cell' +
                    (status === 'missed' ? ' missed-day' : '') +
                    (selDay?.d === d ? ' selected-day' : '')
                  }
                  onClick={() => setSelDay({ d, status })}
                >
                  <div className="cal-num">{String(d).padStart(2, '0')}</div>
                  {status !== 'future' && (
                    <div className="cal-dots">
                      <div
                        className={
                          'cal-dot ' + (status === 'missed' ? 'dot-m' : status === 'visit' ? 'dot-v' : 'dot-c')
                        }
                      />
                      {[3, 8, 14, 20, 25, 29].includes(d) && <div className="cal-dot dot-c" />}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
              {[
                ['dot-c', 'confirmed'],
                ['dot-m', 'missed'],
                ['dot-v', 'visit / lab'],
              ].map(([cls, l]) => (
                <span
                  key={l}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    fontSize: 12,
                    color: 'var(--t2)',
                  }}
                >
                  <span className={'cal-dot ' + cls} />
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="card-sm cp">
              {selDay && (
                <>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--t3)',
                      marginBottom: 8,
                      textTransform: 'uppercase',
                      letterSpacing: '.06em',
                    }}
                  >
                    Selected · {selDay.d} May
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>
                    {selDay.status === 'missed' ? 'Missed' : 'Confirmed'} · Crocin 250 mg
                  </div>
                  <div className="kv">
                    <div className="kv-row">
                      <span className="kv-k">SMS sent</span>
                      <span className="kv-v" style={{ fontFamily: 'monospace', fontSize: 13 }}>
                        14:00 · delivered
                      </span>
                    </div>
                    <div className="kv-row">
                      <span className="kv-k">Reply</span>
                      <span className="kv-v" style={{ color: 'var(--t3)' }}>—</span>
                    </div>
                    <div className="kv-row">
                      <span className="kv-k">Alert created</span>
                      <span className="kv-v" style={{ fontFamily: 'monospace', fontSize: 13 }}>
                        16:00 · sent to Ana L.
                      </span>
                    </div>
                    <div className="kv-row">
                      <span className="kv-k">Contact</span>
                      <span className="kv-v" style={{ color: 'var(--t3)' }}>—</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="card-sm cp">
              <div className="clabel">Patterns</div>
              <ul style={{ paddingLeft: 16, fontSize: 14, lineHeight: 1.7, color: 'var(--t1)' }}>
                <li>4 misses / 30 days — all on weekends</li>
                <li>Morning doses: 100% confirmed</li>
                <li>Evening (20:00): 86%</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {view === 'feed' && (
        <div style={{ maxWidth: 760 }}>
          <div className="feed-wrap">
            <div className="feed-line" />
            {events.map((e, i) => (
              <div key={i} className="feed-item">
                <div
                  className="feed-dot"
                  style={{
                    background:
                      e.st === 'confirmed'
                        ? 'var(--good)'
                        : e.st === 'missed'
                        ? 'var(--bad)'
                        : e.st === 'delivered'
                        ? 'var(--primary)'
                        : 'var(--t3)',
                  }}
                />
                <div className="feed-time">{e.time}</div>
                <div className={'feed-card' + (e.st === 'missed' ? ' missed-bg' : '')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{e.drug}</span>
                    {e.st === 'confirmed' && (
                      <span className="badge b-confirmed">
                        <span className="bdot" style={{ background: 'var(--good)' }} />
                        confirmed
                      </span>
                    )}
                    {e.st === 'missed' && (
                      <span className="badge b-missed">
                        <span className="bdot" style={{ background: 'var(--bad)' }} />
                        missed
                      </span>
                    )}
                    {e.st === 'delivered' && (
                      <span className="badge b-delivered">
                        <span className="bdot" style={{ background: 'var(--primary)' }} />
                        delivered
                      </span>
                    )}
                  </div>
                  {e.note && (
                    <div style={{ fontSize: 13, color: 'var(--t2)', marginTop: 5 }}>
                      {e.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {(view === 'heatmap' || view === 'chart') && (
        <div
          style={{
            textAlign: 'center',
            padding: 60,
            color: 'var(--t3)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            background: 'var(--card)',
          }}
        >
          <div style={{ fontSize: 16, marginBottom: 8 }}>
            {view === 'heatmap' ? 'Heatmap view' : 'Chart view'}
          </div>
          <div style={{ fontSize: 13 }}>
            90-day heatmap / weekly trend chart would render here
          </div>
        </div>
      )}
    </div>
  );
}

/* ── SCREEN 3: Enroll patients (3 variants) ── */
function ScreenEnroll({ onBack, onDone }) {
  const [variant, setVariant] = useState('A');

  return (
    <div className="container">
      <div className="bc">
        <span onClick={onBack}>Patients</span>
        <span style={{ color: '#ccc' }}>/</span>
        <span>New</span>
      </div>
      <div className="page-header">
        <div className="ph-left">
          <h1>Enroll patients</h1>
          <p>
            {variant === 'A'
              ? 'Variant A · single page, sections. Fewer hops — best for power users.'
              : variant === 'B'
              ? 'Variant B · 4-step wizard. One decision per step. Great for training new staff.'
              : 'Variant C · split-view. Form on the left, live patient card + SMS preview on the right.'}
          </p>
        </div>
        {variant === 'A' && (
          <div className="ph-right">
            <button className="btn btn-48 bs">Cancel</button>
            <button className="btn btn-48 bp" onClick={onDone}>
              Enroll + send consent SMS
            </button>
          </div>
        )}
        {variant === 'C' && (
          <div className="ph-right">
            <button className="btn btn-48 bp" onClick={onDone}>
              Save
            </button>
          </div>
        )}
      </div>

      {/* Variant switcher */}
      <div className="island-tabs" style={{ marginBottom: 24 }}>
        {[
          ['A', 'A · Single page'],
          ['B', 'B · Wizard'],
          ['C', 'C · Split view'],
        ].map(([k, l]) => (
          <button
            key={k}
            className={'itab' + (variant === k ? ' active' : '')}
            onClick={() => setVariant(k)}
          >
            {l}
          </button>
        ))}
      </div>

      {variant === 'A' && <EnrollA />}
      {variant === 'B' && <EnrollB onDone={onDone} />}
      {variant === 'C' && <EnrollC />}
    </div>
  );
}

function EnrollA() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 900 }}>
      {/* Patient section */}
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>1 · PATIENT</div>
        <div className="grid-2" style={{ marginBottom: 16 }}>
          <div className="field">
            <div className="flabel">Name patients</div>
            <input className="finput" defaultValue="María González" />
          </div>
          <div className="field">
            <div className="flabel">
              Mobile number <span className="flabel-hint">E.164, live-validated</span>
            </div>
            <input className="finput" defaultValue="+52 55 1234 5678" />
          </div>
        </div>
        <div className="grid-2" style={{ marginBottom: 16 }}>
          <div className="field">
            <div className="flabel">Country</div>
            <select className="fselect">
              <option>Mexico</option>
              <option>Colombia</option>
              <option>Argentina</option>
            </select>
          </div>
          <div className="field">
            <div className="flabel">
              Time zone <span className="flabel-hint">IANA · DST aware</span>
            </div>
            <select className="fselect">
              <option>America/Mexico_City</option>
              <option>America/Cancun</option>
            </select>
          </div>
        </div>
        <div className="grid-2">
          <div className="field">
            <div className="flabel">Preferred locale</div>
            <select className="fselect">
              <option>es-MX</option>
              <option>en-US</option>
            </select>
          </div>
          <div className="field">
            <div className="flabel">Program</div>
            <select className="fselect">
              <option>PG-001 · Crocin 250 mg — Mexico</option>
              <option>PG-002 · Metformin 500 mg</option>
            </select>
          </div>
        </div>
      </div>

      {/* Consent section */}
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>
          2 · CONSENT <span style={{ color: 'var(--bad)', fontWeight: 500, fontSize: 13 }}>· REQUIRED BY COFEPRIS</span>
        </div>
        <div className="grid-3" style={{ marginBottom: 16 }}>
          <div className="field">
            <div className="flabel">Consent channel</div>
            <select className="fselect">
              <option>Verbal (in clinic)</option>
              <option>Written</option>
              <option>E-form</option>
            </select>
          </div>
          <div className="field">
            <div className="flabel">Consent date</div>
            <input className="finput" defaultValue="2026-05-14" />
          </div>
          <div className="field">
            <div className="flabel">
              Document ID <span className="flabel-hint">optional</span>
            </div>
            <input className="finput" placeholder="e.g. consent-2026-0042.pdf" />
          </div>
        </div>
        <div className="chk-row">
          <input
            type="checkbox"
            defaultChecked
            style={{ marginTop: 2, accentColor: 'var(--primary)', width: 16, height: 16 }}
          />
          <span style={{ fontSize: 14, lineHeight: 1.5 }}>
            On save the system auto-sends a <b>consent SMS</b>. Reminders activate only after the patient
            replies <b>SI</b>.
          </span>
        </div>
      </div>

      {/* Schedule section */}
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>3 · SCHEDULE (OPTIONAL NOW)</div>
        <div
          style={{
            border: '1px dashed var(--border-md)',
            borderRadius: 8,
            padding: '18px 20px',
            color: 'var(--t3)',
            fontSize: 14,
          }}
        >
          You can configure here or jump to the Schedule step later.{' '}
          <button className="bd" style={{ color: 'var(--primary)' }}>
            + Add medication
          </button>
        </div>
      </div>
    </div>
  );
}

function EnrollB({ onDone }) {
  const [step, setStep] = useState(3);
  const steps = ['Patient', 'Program', 'Consent', 'Schedule'];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* Step bar */}
      <div className="steps">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="step-item">
              <div className={'step-circle' + (i < step ? ' done' : i === step - 1 ? ' active' : '')}>
                {i + 1}
              </div>
              <span className={'step-label' + (i === step - 1 ? ' active' : '')}>{s}</span>
            </div>
            {i < steps.length - 1 && <div className="step-line" />}
          </React.Fragment>
        ))}
      </div>

      {/* Step 3 content: Consent */}
      <div style={{ padding: '24px 0' }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Patient consent</div>
        <div style={{ fontSize: 14, color: 'var(--t2)', marginBottom: 24 }}>
          Mandatory under COFEPRIS / PSP. Written to consent_log forever.
        </div>
        <div className="grid-2" style={{ marginBottom: 20 }}>
          <div className="field">
            <div className="flabel">
              Channel <span className="flabel-hint">how consent was obtained</span>
            </div>
            <select className="fselect">
              <option>Verbal (in clinic)</option>
              <option>Written</option>
              <option>E-form</option>
            </select>
          </div>
          <div className="field">
            <div className="flabel">Consent date</div>
            <input className="finput" defaultValue="2026-05-14" />
          </div>
        </div>

        {/* SMS preview box */}
        <div className="card-inner" style={{ padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: 'var(--t3)', marginBottom: 12 }}>SMS that will be sent now</div>
          <div className="sms">
            Hola <b>María</b>, te suscribiste al programa <b>Crocin 250 mg</b>. Responde <b>SI</b> para
            confirmar o <b>STOP</b> para cancelar.
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: 'var(--t2)' }}>
            ↳ Reminders will start <b>only after the patient replies SI</b>.
          </div>
        </div>

        <div className="chk-row">
          <input
            type="checkbox"
            defaultChecked
            style={{ marginTop: 2, accentColor: 'var(--primary)', width: 16, height: 16 }}
          />
          <span style={{ fontSize: 14, lineHeight: 1.5 }}>
            I confirm consent was obtained and recorded in the patient chart (consent log).
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          borderTop: '1px solid var(--border)',
        }}
      >
        <button className="btn btn-48 bs" onClick={() => setStep(s => Math.max(1, s - 1))}>
          ← Back
        </button>
        <span style={{ fontSize: 13, color: 'var(--t3)' }}>
          Step {step} of {steps.length}
        </span>
        <button className="btn btn-48 bp" onClick={() => (step < 4 ? setStep(s => s + 1) : onDone())}>
          Next →
        </button>
      </div>
    </div>
  );
}

function EnrollC() {
  const [form, setForm] = useState({ name: 'María González', phone: '+52 55 1234 5678' });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="split">
      {/* Left: form */}
      <div className="split-left">
        <div className="split-section">Patient data</div>
        <div className="field" style={{ marginBottom: 16 }}>
          <div className="flabel">Name</div>
          <input className="finput" value={form.name} onChange={set('name')} />
        </div>
        <div className="grid-2" style={{ marginBottom: 16 }}>
          <div className="field">
            <div className="flabel">Phone</div>
            <input className="finput" value={form.phone} onChange={set('phone')} />
          </div>
          <div className="field">
            <div className="flabel">Country</div>
            <select className="fselect">
              <option>Mexico</option>
            </select>
          </div>
        </div>
        <div className="grid-2" style={{ marginBottom: 16 }}>
          <div className="field">
            <div className="flabel">Time zone</div>
            <select className="fselect">
              <option>America/Mexico_City</option>
            </select>
          </div>
          <div className="field">
            <div className="flabel">Locale</div>
            <select className="fselect">
              <option>es-MX</option>
              <option>en-US</option>
            </select>
          </div>
        </div>
        <div className="field" style={{ marginBottom: 24 }}>
          <div className="flabel">Program</div>
          <select className="fselect">
            <option>PG-001 · Crocin 250 mg — Mexico</option>
          </select>
        </div>
        <div className="split-section">Consent</div>
        <div className="grid-2">
          <div className="field">
            <div className="flabel">Channel</div>
            <select className="fselect">
              <option>Verbal</option>
              <option>Written</option>
            </select>
          </div>
          <div className="field">
            <div className="flabel">Date</div>
            <input className="finput" defaultValue="2026-05-14" />
          </div>
        </div>
      </div>

      {/* Right: live card */}
      <div className="split-right">
        <div style={{ fontSize: 11, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 14 }}>
          Live card · updates as you type
        </div>
        <div className="live-card" style={{ marginBottom: 20 }}>
          <div className="live-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--border-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 13,
                  color: 'var(--t2)',
                }}
              >
                MG
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>
                  {form.name || 'Patient name'}
                </div>
                <div style={{ fontSize: 12, color: 'var(--t2)', marginTop: 2 }}>
                  {form.phone} · es-MX
                </div>
              </div>
            </div>
            <span className="badge b-paused">
              <span className="bdot" style={{ background: 'var(--warn)' }} />
              pending consent
            </span>
          </div>
          <div className="kv">
            <div className="kv-row">
              <span className="kv-k">Program</span>
              <span className="kv-v">Crocin 250 mg — Mexico</span>
            </div>
            <div className="kv-row">
              <span className="kv-k">Locale</span>
              <span className="kv-v">es-MX · America/Mexico_City</span>
            </div>
            <div className="kv-row">
              <span className="kv-k">Consent</span>
              <span className="kv-v" style={{ fontFamily: 'monospace', fontSize: 12 }}>
                verbal · 2026-05-14 → log #cl-1042
              </span>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>
          Will run on save
        </div>
        <ol style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.9, color: 'var(--t1)' }}>
          <li>INSERT patients · 1 row</li>
          <li>INSERT consent_log · channel=verbal</li>
          <li>QUEUE consent_sms · es-MX template</li>
          <li>WAIT 24h for <b>SI</b></li>
          <li>
            ON YES: <code style={{ fontFamily: 'monospace', fontSize: 12 }}>sms_opted_in=true</code> →
            activates reminders
          </li>
        </ol>
        <div style={{ fontSize: 11, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em', margin: '16px 0 8px' }}>
          SMS preview · es-MX
        </div>
        <div className="sms">
          Hola <b>{(form.name || 'María').split(' ')[0]}</b>, te suscribiste al programa <b>Crocin 250 mg</b>.
          Responde <b>SI</b> para confirmar.
        </div>
      </div>
    </div>
  );
}

/* ── SCREEN 4: Consent flow diagram ── */
function ScreenConsentFlow({ onBack }) {
  const lanes = ['Nurse', 'System (admin portal)', 'BullMQ + Redis', 'Twilio', 'Patient'];
  const rows = [
    ['Enrolls patient +\nconsent=verbal', 'INSERT patients\nINSERT\nconsent_log', '', '', ''],
    ['', 'QUEUE\nconsent_sms\n(es-MX template)', 'delayed: immediate', '', ''],
    ['', '', '→ active', 'POST /Messages', '📱 Hola María…\nResponde SI'],
    ['', '', '', '', '✉️ SI'],
    ['', 'POST /sms-in\n(webhook)\nUPDATE\nsms_opted_in=true', '', '← inbound', ''],
    ['', 'ACTIVATE schedule\nCRON kicks in', '', '', ''],
    ['', '', 'QUEUE hourly\nbatch', 'POST /Messages\n@ 14:00 local', '📱 Es hora de tomar\nCrocin'],
    ['', '', '', '', '✉️ CONFIRMAR'],
    ['', 'UPDATE\nreminder_log\n.confirmed=true', '', '', ''],
    ['', '', '', '', '✉️ STOP (anytime)'],
    ['', 'UPDATE\nsms_opted_in=false\nPURGE jobs', 'PURGE jobs\nby patient', '', ''],
  ];

  return (
    <div className="container">
      <div className="bc">
        <span onClick={onBack}>Docs</span>
        <span style={{ color: '#ccc' }}>/</span>
        <span>Flows</span>
        <span style={{ color: '#ccc' }}>/</span>
        <span>Consent & Reminder</span>
      </div>
      <div className="page-header">
        <div className="ph-left">
          <h1>Consent → activation → reminders</h1>
          <p>Two-phase SMS confirmation. Contract diagram for backend, explainer screen for the team.</p>
        </div>
      </div>

      {/* Sequence diagram */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: 24,
          overflowX: 'auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${lanes.length}, 1fr)`,
            borderBottom: '2px solid var(--t1)',
            paddingBottom: 12,
            marginBottom: 0,
          }}
        >
          {lanes.map(l => (
            <div
              key={l}
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: 'var(--t2)',
                padding: '0 8px',
              }}
            >
              {l}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, ri) => (
          <div
            key={ri}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${lanes.length}, 1fr)`,
              minHeight: 68,
              borderBottom: '1px solid var(--border)',
              padding: '8px 0',
            }}
          >
            {row.map((cell, ci) => (
              <div
                key={ci}
                style={{
                  padding: '0 8px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {ci > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 1,
                      borderLeft: '1px dashed var(--border-md)',
                    }}
                  />
                )}
                {cell && (
                  <div
                    style={{
                      border: '1px solid var(--border-md)',
                      borderRadius: 4,
                      padding: '7px 10px',
                      fontSize: 12,
                      lineHeight: 1.4,
                      whiteSpace: 'pre-wrap',
                      width: '100%',
                      background:
                        cell.includes('📱') || cell.includes('✉️')
                          ? 'rgba(1,160,210,.05)'
                          : 'var(--card)',
                      borderColor:
                        cell.includes('📱') || cell.includes('✉️')
                          ? 'rgba(1,160,210,.3)'
                          : 'var(--border-md)',
                      fontFamily:
                        cell.includes('📱') || cell.includes('✉️') ? 'Inter' : 'monospace',
                    }}
                  >
                    {cell}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── APP ROOT ── */
function App() {
  const [screen, setScreen] = useState('program');
  const [selPatient, setSelPatient] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Nav />

      {/* Floating nav for prototype */}
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 200,
          background: 'var(--card)',
          border: '1px solid var(--border-md)',
          borderRadius: 10,
          padding: 8,
          display: 'flex',
          gap: 6,
          boxShadow: '0 4px 20px rgba(0,0,0,.1)',
        }}
      >
        {[
          ['program', 'Program detail'],
          ['adherence', 'Adherence'],
          ['enroll', 'Enroll patient'],
          ['consent-flow', 'Consent flow'],
        ].map(([s, l]) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            style={{
              padding: '6px 13px',
              borderRadius: 7,
              border: 'none',
              background: screen === s ? 'var(--primary)' : 'transparent',
              color: screen === s ? '#fff' : 'var(--t2)',
              fontSize: 12,
              fontWeight: screen === s ? 600 : 400,
              cursor: 'pointer',
              fontFamily: 'Inter',
              transition: 'all .12s',
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="page">
        {screen === 'program' && (
          <ScreenProgramDetail
            onEnroll={() => setScreen('enroll')}
            onAdherence={p => {
              setSelPatient(p);
              setScreen('adherence');
            }}
          />
        )}
        {screen === 'adherence' && (
          <ScreenAdherence patient={selPatient} onBack={() => setScreen('program')} />
        )}
        {screen === 'enroll' && (
          <ScreenEnroll onBack={() => setScreen('program')} onDone={() => setScreen('program')} />
        )}
        {screen === 'consent-flow' && <ScreenConsentFlow onBack={() => setScreen('program')} />}
      </div>
    </div>
  );
}

export default App;
