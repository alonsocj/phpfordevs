const btnEnvio=document.getElementById('enviarCorreo');
        btnEnvio.addEventListener('click',function(e){
            e.preventDefault();
            const email=document.getElementById('email').value;
            const nombre=document.getElementById('nombre').value;
            const subject=document.getElementById('subject').value;
            const mensaje=document.getElementById('mensaje').value;
            window.location.href=`mailto:phpfordevs@gmail.com?subject=${subject}&body=Nombre%3A%20${nombre}%0ACorreo%3A%20${email}%0AMensaje%3A%20${mensaje}`;
            document.getElementById('email').value="";
            document.getElementById('nombre').value="";
            document.getElementById('subject').value="";
            document.getElementById('mensaje').value="";
        });