const calendar = document.getElementById('calendar');
const modal = document.getElementById('imageModal');
const field = document.getElementById('modal-body');
const title = document.getElementById('title');
const myModal = new bootstrap.Modal(modal);

const list = 
    [
        {day: '1', title: 'Stimmungstracker', text:'Nimm dir im Dezember jeden Abend einen kurzen Moment Zeit, um in dich zu gehen.<br> Beobachte deine Stimmung, indem du das Feld des Tages in der passenden Farbe markierst.', type:''},
        {day: '2', title: 'Atem', text:'Bei viel Stress und Anspannung ist schnell die Luft raus. Setze dich an einen ruhigen Ort, schließe die Augen und folge den Anweisungen in dem Video.',link:'https://www.youtube.com/embed/98XyXBHAB9Q?si=ED73G_N4P9AMtl_z', type:'video'},
        {day: '3', title: 'Rezept', text:'Starte gestärkt in den Tag mit diesem weihnachtlichen Porridge. <br><br> Guten Appetit!',link:'https://www.familienkost.de/rezept_apfel-zimt-porridge.html', type:'website'},
        {day: '4', title: 'Auszeit', text:'Nimm dir heute eine kleine Auszeit und gehe etwas an die frische Luft. Achte bewusst auf deine Umgebung. Was kannst du sehen? Was hören? Was riechen? ',type:''}, // dinge suchen?
        {day: '5', title: 'Fußbad', text:'Gönn dir ein Fußbad! Mische dem warmen Wasser etwas Kaisernatron oder Meersalz hinzu. Eine Anleitung für ein wohltuendes Kneippbad findest du hier:',link:'https://www.kneipp.com/de_de/kneipp-wissen/kneipp-anwendungen/wechselfussbad/?gad_source=5&gad_campaignid=21183244306&gclid=EAIaIQobChMI9M3fz4nflwMVABeiAx1qPyM4EAAYASAAEgLAVPD_BwE',type:'website'},
        {day: '6', title: 'Nikolaus', text:'Nehme dir Stift, Papier und einen Moment Zeit. Blicke zurück auf dein Jahr 2026 und schreibe folgende Dinge auf:<br><br>3 Dinge, für die ich dankbar bin<br>3 schöne Momente, die ich dieses Jahr erlebt habe<br>3 Dinge, die ich an mir mag<br>1 guter Vorsatz für das nächste Jahr.', type:''},
        {day: '7', title: 'Artikel', text:'Ätherische Öle und Gerüche können so manche Beschwerden lindern. In diesem Artikel geht es um die Aromatherapie und welche Wirkstoffe wobei helfen. ',link:'https://www.deine-gesundheitswelt.de/balance-ernaehrung/aromatherapie', type:'website'},
        {day: '8', title: 'Abschalten', text:'Zendoodle ist einfach und entspannend. Perfekt um 10 Minuten einfach mal an gar nichts zu denken. Du brauchst Papier, einen schwarzen Fineliner, bunte Stifte (optional).<br> Folge dem Video oder suche dir eigene Muster. Wähle die Papiergröße oder Anzahl der Linien in die du das Blatt unterteilst anhand der Zeit, die du dir dafür nehmen willst.',link:'https://www.youtube.com/embed/riHpX2LYqwg?si=zXo3gbdxfzYAHn4L', type: 'video'},
        {day: '9', title: 'Muskelentspannung', text:'Bei der progressive Muskelentspannung lernst du gezielt Muskeln anzuspannen und wieder loszulassen. Es hilft dir Verspannungen zu lösen und Stress abzubauen.<br><br>Wichtig: Vergiss nicht zu atmen!<br><br>Solltest du einmal einer eigenen Anleitung folgen überspringe immer den Schritt, der dich auffordert die Zähne fest zusammen zu beißen.', link:'https://www.youtube.com/embed/2AQYRRcNTns?si=49HKfYCHMnE6ebn2', type:'video'},
        {day: '10', title: 'Traumreise', text:'Eine tiefenentspannende Traumreise eignet sich auch gut, um entspannt einzuschlafen.',link:'https://www.youtube.com/embed/oz8l8mV-3yc?si=lfJfATuS2flPjlvz', type:'video'},
        {day: '11', title: 'Gesichtsyoga', text:'Entspanne deine Gesichtsmuskeln mit einer kurzen Massage.',link:'https://www.youtube.com/embed/8GvuZv14Dk8?si=r3Fp1ndKiyV2UN0c', type:'video'},
        {day: '12', title: 'Nachrichten', text:'Bei den vielen schlechten Nachrichten aus aller Welt kommen die guten oft viel zu kurz. Hier findest du neueste Entwicklungen, die die Welt ein wenig besser machen.',link:'https://goodnews-magazin.de/', type:'website'},
        {day: '13', title: 'Bodyscan', text:'Beim Bodyscan achtest du auf deinen Körper, deine Gedanken und Gefühle und nimmst dich selbst besser wahr. Dauer: ca. 30 Minuten',link:'https://www.tk.de/techniker/gesundheit-foerdern/stress-entspannung/aktiv-entspannen/body-scan-download-2007110', type:'website'},
        {day: '14', title: 'Artikel', text:'Akupressur ist eine asiatische Heilmethode und löst durch Druck und Massage bestimmter Stellen Verspannungen im Körper. Die Stellen im folgenden Artikel sind speziell dazu geeignet gezielt Stress zu lindern.',link:'https://orthomechanik.de/blogs/news/akupressur-stress-angst', type:'website'},
        {day: '15', title: 'Puzzle', text:'Lege ein Puzzle! Ganz ohne Unordnung im Wohnzimmer und verschwindenden Teilen.',link:'https://www.jigsawplanet.com/?rc=play&pid=1571063312b4', type:'website'},
        {day: '16', title: 'Yoga', text:'Starte entspannt in den Tag mit einer kurzen Runde Yoga zur Entspannung. ',link:'https://www.youtube.com/embed/7Av1kR5TnIA?si=HMHgqV1-EUDaVH86', type:'video'},
        {day: '17', title: 'Rezept', text:'Hier ein Rezept für eine einfache wärmende Kürbissuppe mit Kartoffeln.',link:'https://www.rewe.de/rezepte/klassische-kuerbissuppe/', type:'website'},
        {day: '18', title: 'Schüttelmeditation', text:'Schüttle den Stress und Verspannungen ab!',link:'https://www.youtube.com/embed/pLwuf4BemTo?si=0Wei0mmC4jW170WS', type:'video'},
        {day: '19', title: 'Autogenes Training', text:'Hilf deinem Körper und Geist zur Ruhe zu kommen. Autogenes Training ist perfekt um Stress abzubauen und innere Anspannung zu lösen. Es kann auch beim Einschlafen helfen.',link:'https://www.youtube.com/embed/NuS1tz8ggO0?si=_icZUxM3TwaBWQ7f', type:'video'},
        {day: '20', title: 'Nostalgie', text:'Mache eine Reise in die Vergangenheit und lerne, wie früher jeden Sonntag, etwas mit der Maus.',link:'https://www.youtube.com/embed/zlGwP2aCu7w?si=8ERiHtS43D2GQ8-M', type:'video'},
        {day: '21', title: 'Zukunft', text:'Was hält das neue Jahr für dich bereit? Ziehe deine Tarot-Jahreskarte für 2027 und wirf einen Blick in die Zukunft.',link:'https://theastroscope.com/de/tarot/jahreskarte', type:'website'},
        {day: '22', title: '', text:'',link:''},
        {day: '23', title: 'Meditation', text:'Eine kurze geführte Meditation für einen guten Start in den Tag.',link:'https://www.youtube.com/embed/_VFRpeEQQxM?si=P2kgQRy4iKA30QnW', type:'video'},
        {day: '24', title: 'Märchen', text:'Fröhliche Weihnachten! Ich hoffe, dieser Adventskalender hat dir geholfen etwas entspannter durch die Weihnachtszeit zu kommen. Heute gibt es einen Link zu dem Weihnachtsklassiker schlechthin - Drei Haselnüsse für Aschenbrödel.',link:'', type:'website'},
    ]

for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}


let doors = Array.from(document.getElementsByClassName('door'));
   

let show = (e) =>{
    let id = Number(e.target.id);
    let today = new Date();
    let open = new Date(); // !!!ÄNDERN

    if (open <= today){
        title.innerText = `${id}. Dezember - ${list[id-1]['title']}`;
        field.innerHTML= `<div class="text">${list[id-1]['text']}</div>`;

        if (list[id-1]['type']=='website')
            {   
                field.innerHTML += `<form action='${list[id-1].link}'>
                <input type='submit' id="link-btn" class="btn btn-primary" value='Gehe zur Website'></input></form>`;
            }
        else if(list[id-1]['type']=='video')
            {
                field.innerHTML += `<iframe width="560" height="315" src="${list[id-1].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            }
        else{
            field.innerHTML += `<img width="20%" src="https://cdn.pixabay.com/photo/2016/11/20/00/03/holly-1841718_1280.png">`
        }

    
        myModal.show();

}}

doors.forEach((d)=>{
    d.addEventListener('click', show);
})

