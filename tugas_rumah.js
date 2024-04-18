document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let namaNode = document.getElementById("nama");
    let usernameNode = document.getElementById("username");
    let emailNode = document.getElementById("email");
    let passwordNode = document.getElementById("password");
    let konfirmasiPasswordNode = document.getElementById("konfirmasi_password");
    let noTeleponNode = document.getElementById("no_telepon");
    let jenisKelaminNodePria = document.getElementById("jenis_kelamin_pria");
    let jenisKelaminNodeWanita = document.getElementById(
      "jenis_kelamin_wanita"
    );
    let websiteNode = document.getElementById("website");

    let namaSpanNode = document.getElementById("namaSpan");
    let usernameSpanNode = document.getElementById("usernameSpan");
    let emailSpanNode = document.getElementById("emailSpan");
    let passwordSpanNode = document.getElementById("passwordSpan");
    let konfirmasiPasswordSpanNode = document.getElementById(
      "konfirmasiPasswordSpan"
    );
    let noTeleponSpanNode = document.getElementById("noTeleponSpan");
    let jenisKelaminSpanNode = document.getElementById("jenisKelaminSpan");
    let websiteSpanNode = document.getElementById("websiteSpan");

    let namaError = "";
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    let konfirmasiPasswordError = "";
    let noTeleponError = "";
    let jenisKelaminError = "";
    let websiteError = "";

    // Validasi Nama
    if (namaNode.value.trim() === "") {
      namaNode.placeholder = "Nama harus diisi";
    }

    // Validasi Username
    if (usernameNode.value.trim() === "") {
      usernameNode.placeholder = "Username harus diisi";
    }

    // Validasi Email
    if (emailNode.value.trim() === "") {
      emailNode.placeholder = "Email harus diisi";
    } else if (!validateEmail(emailNode.value.trim())) {
      emailNode.placeholder = "Email tidak valid";
    }

    // Validasi Password
    if (passwordNode.value.trim() === "") {
      passwordNode.placeholder = "Password harus diisi";
    }

    // Validasi Konfirmasi Password
    if (konfirmasiPasswordNode.value.trim() === "") {
      konfirmasiPasswordError = "Konfirmasi password harus diisi";
    } else if (
      konfirmasiPasswordNode.value.trim() !== passwordNode.value.trim()
    ) {
      konfirmasiPasswordNode.placeholder = "Konfirmasi password tidak cocok";
    }

    // Validasi No Telepon
    if (noTeleponNode.value.trim() === "") {
      noTeleponNode.p[laceholder] = "Nomor telepon harus diisi";
    }

    // Validasi Jenis Kelamin
    if (!jenisKelaminNodePria.checked && !jenisKelaminNodeWanita.checked) {
      jenisKelaminNodePria.placeholder = "Jenis kelamin harus dipilih";
    }

    // Validasi Alamat Website
    if (websiteNode.value.trim() === "") {
      websiteNode.placeholder = "Alamat website harus diisi";
    }

    if (namaError !== "") {
      namaSpanNode.innerHTML = namaError;
      namaSpanNode.className = "error";
      event.preventDefault();
    }

    if (usernameError !== "") {
      usernameSpanNode.innerHTML = usernameError;
      usernameSpanNode.className = "error";
      event.preventDefault();
    }

    if (emailError !== "") {
      emailSpanNode.innerHTML = emailError;
      emailSpanNode.className = "error";
      event.preventDefault();
    }

    if (passwordError !== "") {
      passwordSpanNode.innerHTML = passwordError;
      passwordSpanNode.className = "error";
      event.preventDefault();
    }

    if (konfirmasiPasswordError !== "") {
      konfirmasiPasswordSpanNode.innerHTML = konfirmasiPasswordError;
      konfirmasiPasswordSpanNode.className = "error";
      event.preventDefault();
    }

    if (noTeleponError !== "") {
      noTeleponSpanNode.innerHTML = noTeleponError;
      noTeleponSpanNode.className = "error";
      event.preventDefault();
    }

    if (jenisKelaminError !== "") {
      jenisKelaminSpanNode.innerHTML = jenisKelaminError;
      jenisKelaminSpanNode.className = "error";
      event.preventDefault();
    }

    if (websiteError !== "") {
      websiteSpanNode.innerHTML = websiteError;
      websiteSpanNode.className = "error";
      event.preventDefault();
    }
    let syaratError = "";
    if (syaratNode.checked !== true) {
      syaratError = "Syarat dan ketentuan harus di setujui";
    }

    if (syaratError !== "") {
      syaratSpanNode.innerHTML = syaratError;
      syaratSpanNode.className = "error";
      e.preventDefault();
    }
  });
//email
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//listener input angka
document
  .getElementById("no_telepon")
  .addEventListener("input", function (event) {
    const input = event.target.value;
    event.target.value = input.replace(/\D/g, "");
  });
