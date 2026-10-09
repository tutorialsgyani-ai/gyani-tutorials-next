import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/blog' },
  openGraph: { type: 'website', url: '/blog', title: 'Gyani Tutorials Blog | Home Tuition Advice', description: 'Practical advice for parents and students on choosing tutors, home vs online tuition and exam preparation.' },
  title: 'Blog',
  description: 'Advice for parents and students on choosing tutors, home vs online tuition and exam preparation.',
};

export default function Page() {
  return (
<main id="blog">
<div className="ph1"><div className="w"><h1>The Gyani Tutorials blog</h1><p>Practical advice for parents and students on choosing tutors, studying smarter and preparing for exams.</p></div></div>
<section><div className="w">
<div className="posts">
<article className="post"><div className="top" style={{background:'#0f5c63'}}>Choosing a tutor</div><div className="bd"><div className="m">Parents · 3 min read</div><h3>How to choose the right home tutor for your child</h3>
<p>A good tutor does more than explain the textbook. Here is what to look for before you decide.</p>
<details><summary>Read more</summary><ul><li><b>Check qualifications and experience</b> in the exact subject and class your child needs.</li><li><b>Ask whether the tutor is verified.</b> You should know who is entering your home or joining your child's online class.</li><li><b>Look for personal attention.</b> The best tutors learn a student's strengths and weaknesses and plan around them.</li><li><b>Match the timing.</b> A tutor whose schedule fits yours is more likely to stay consistent.</li><li><b>Review progress.</b> Ask how the tutor will share feedback with you.</li></ul><p>At Gyani Tutorials we handle the matching, so you meet a verified tutor who fits your child's needs.</p></details></div></article>

<article className="post"><div className="top" style={{background:'#c2306b'}}>Home vs online</div><div className="bd"><div className="m">Parents and students · 4 min read</div><h3>Home tuition or online tuition: which is better?</h3>
<p>Both can work well. The right choice depends on your child and your situation.</p>
<details><summary>Read more</summary><p><b>Home tuition</b> suits younger children who need in-person guidance, hands-on explanation and fewer screen distractions. It is available with Gyani Tutorials in Dehradun.</p><p><b>Online tuition</b> suits older students, families outside Dehradun, and anyone who wants flexible timings without travel. It works best with a quiet space and a stable internet connection.</p><p><b>Our advice:</b> start with the format your child is most comfortable with. You can always change later.</p></details></div></article>

<article className="post"><div className="top" style={{background:'#8a5a2b'}}>Exam preparation</div><div className="bd"><div className="m">Students · 4 min read</div><h3>Five habits that help with entrance exam preparation</h3>
<p>Whether it is a school entrance test, RIMC, IELTS or GMAT, steady habits beat last-minute cramming.</p>
<details><summary>Read more</summary><ul><li><b>Know the syllabus and pattern</b> before you start studying.</li><li><b>Study a little every day</b> instead of long, irregular sessions.</li><li><b>Practise past papers</b> under timed conditions.</li><li><b>Review mistakes</b> and write down what you learned from each one.</li><li><b>Get a tutor for weak areas</b> so doubts do not pile up.</li></ul></details></div></article>
</div>
<p style={{margin:'36px 0 0'}}><Link className="btn" href="/#student">Find a tutor</Link></p>
</div></section>
</main>
  );
}
