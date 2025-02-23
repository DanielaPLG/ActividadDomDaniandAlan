function minimanual(prácticasdeestudio){
    var elem = document.getElementById("contenido");
    }
    function minimanual(prácticasdeestudio){
        var elem = document.getElementById("contenido").innerHTML = "este es un manual de prácticas de estudio de informatica para que puedan sobrevivir AJJAAJJ";
        console.log("minimanual");
        }
    minimanual();
    
        let div = document.createElement('div');
        
        let ul = document.createElement('ul');
    
        let items = [
            'No dejar las tareas para última hora',
            'No te duermas en clases',
            'Si no entendiste algo, pídele ayuda al teacher',
            'Práctica lo aprendido en clases',
            'No subas las tareas a las 11.59 XD',
            'Si no te quedó muy claro un tema, busca tutoríales',
            'Si terminaste una actividad en clase, ayuda a los que no entienden',
            'Siempre escala la milla extra',
            'Organiza bien tu tiempo',
            'No te estreses tan rápido, busca otras alternativas',
            'No sobrecargues tu mente de tanta información, descansa un poco',
            'Establece metas claras y concretas',
            'Confía en ti mismo'
        ];
    
        items.forEach(consejo => {
            let li = document.createElement('li')
            li.textContent = consejo;
            ul.appendChild(li);
        });
    
        div.appendChild(ul);
        document.body.appendChild(div);