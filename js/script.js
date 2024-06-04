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


const emailLink = document.getElementById("emailid");
emailLink.addEventListener("click", redirecttogmail);
</script>