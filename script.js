document.getElementById("staffForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("✅ Sua candidatura para a Tempest Buxx foi enviada com sucesso!");

    this.reset();
});
