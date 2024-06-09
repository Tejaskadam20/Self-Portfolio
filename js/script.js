/*** typing animation ****////

var typed= new Typed("typing",{
	strings:["ENTC Engineer","Software Developer"],
	typeSpeed:100,
	BackSpeed:60,
	loop:true,
});



<script>
  document.getElementById('downloadCvBtn').addEventListener('click', function() {
    // Set the href to the path of the CV file
    const link = 'Desktop/Tejas Kadam CV.pdf';

    // Open the link in a new window or tab
    window.open(link);

    // Log a message to the console (optional)
    console.log('');
  });


document.getElementById('SendEmail').addEventListener('click', function() {
    const email = 'tejaskadam7267@gmail.com';
    const subject = 'Subject Text';
    const body = 'Hello.';
    const mailtoLink = `mailto:${tejaskadam7267@gmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
});
</script>