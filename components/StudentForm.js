'use client';

const WHATSAPP = '917668789504';

export default function StudentForm() {
  function send(e) {
    e.preventDefault();
    const f = e.currentTarget.elements;
    const v = (id) => f[id].value;
    const text = 'Hello Gyani Tutorials, I need a tutor.\nName: ' + v('n') + '\nClass: ' + v('c') + '\nSubject: ' + v('s') + '\nMode: ' + v('m');
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank');
  }

  return (
<form onSubmit={send} id="f" aria-label="Student enquiry form">
<div><label htmlFor="n">Student / parent name</label><input id="n" required /></div>
<div><label htmlFor="c">Class</label><select id="c"><option>Class 1–5</option><option>Class 6–8</option><option>Class 9–10</option><option>Class 11–12</option><option>Entrance exam / other</option></select></div>
<div><label htmlFor="s">Subject</label><input id="s" placeholder="e.g. Maths, Spoken English" required /></div>
<div><label htmlFor="m">Mode</label><select id="m"><option>Home tuition in Dehradun</option><option>Online tuition</option></select></div>
<button className="btn" type="submit">Request a tutor on WhatsApp</button>
</form>
  );
}
