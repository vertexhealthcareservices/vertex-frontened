// ==========================
// BOOK APPOINTMENT SUBMIT
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = {
                fullName: document.getElementById('fullName').value,
                mobileNumber: document.getElementById('mobileNumber').value,
                emailAddress: document.getElementById('emailAddress').value,
                department: document.getElementById('department').value,
                doctorName: document.getElementById('doctorName').value,
                reasonForVisit: document.getElementById('reasonForVisit').value
            };

            const submitBtn = appointmentForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Processing...";
            submitBtn.disabled = true;

            try {
                const response = await fetch(
                  'https://YOUR-BACKEND-PROJECT.vercel.app/api/appointments',
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                  }
                );

                if (response.ok) {
                    appointmentForm.style.display = 'none';
                    document.getElementById('successMessage').style.display = 'block';
                } else {
                    alert("Failed to book appointment");
                }
            } catch (error) {
                alert("Server connection error");
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
