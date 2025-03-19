import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  function generateDomains(keywords, extensions) {
    const domains = [];
    for (const keyword1 of keywords) {
      for (const keyword2 of keywords) {
        for (const extension of extensions) {
          domains.push(`${keyword1}${keyword2}.${extension}`);
          domains.push(`${keyword1}-${keyword2}.${extension}`);
        }
      }
    }
    return domains;
  }

  const keywords = ['dev', 'pro', 'online', 'tools', '4You'];
  const extensions = ['com', 'net', 'org', 'io', 'es'];

  const generatedDomains = generateDomains(keywords, extensions);

  // mostrar dominios generados
  console.log('Generated domains:');
  generatedDomains.forEach(domain => {
    console.log(domain);
  });
};
