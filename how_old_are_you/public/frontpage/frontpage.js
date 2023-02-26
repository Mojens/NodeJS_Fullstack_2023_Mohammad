/*document.getElementById("submit-date").addEventListener("click", calculateAge);

function calculateAge() {
    const date = document.getElementById("picked-date").value;
    fetch(`/api/age?birthDate=${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => response.json())
      .then(result => {
        document.getElementById("age").innerText = DOMPurify.sanitize(result.data);
        document.getElementById("age-after-text").innerText = DOMPurify.sanitize(" years old");
      });
  };*/
