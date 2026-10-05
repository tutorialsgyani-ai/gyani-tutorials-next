'use client';

const WHATSAPP = '917668789504';

export default function TutorForm() {
  function send(e) {
    e.preventDefault();
    const f = e.currentTarget.elements;
    const v = (id) => f[id].value;
    const text = 'Hello Gyani Tutorials, I want to join as a tutor.\nName: ' + v('tn') + '\nPhone: ' + v('tp') + '\nQualification: ' + v('tq') + '\nSubjects: ' + v('ts') + '\nExperience: ' + v('te') + '\nMode: ' + v('tm') + '\nArea: ' + v('tl');
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank');
  }

  return (
<form onSubmit={send} id="tf" aria-label="Tutor application form">
<div className="r2"><div><label htmlFor="tn">Full name</label><input id="tn" required /></div><div><label htmlFor="tp">Phone number</label><input id="tp" type="tel" required /></div></div>
<div><label htmlFor="tq">Highest qualification</label><input id="tq" placeholder="e.g. M.Sc. Mathematics, B.Ed." required /></div>
<div><label htmlFor="ts">Subjects you teach</label><input id="ts" placeholder="e.g. Maths, Physics, Spoken English" required /></div>
<div className="r2"><div><label htmlFor="te">Experience</label><select id="te"><option>Fresher</option><option>1–3 years</option><option>3–5 years</option><option>5–10 years</option><option>10+ years</option></select></div>
<div><label htmlFor="tm">Teaching mode</label><select id="tm"><option>Home tuition in Dehradun</option><option>Online tuition</option><option>Both</option></select></div></div>
<div><label htmlFor="tl">Area in Dehradun</label><input id="tl" placeholder="e.g. Rajpur Road (for home tuition)" /></div>
<button className="btn" type="submit">Apply on WhatsApp</button>
</form>
  );
}
