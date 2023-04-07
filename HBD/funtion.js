document.getElementById('Birthday').value = new Date().toISOString().substring(0, 10);

const fileInput = document.getElementById("fileup");
// 또는 const fileInput = $("#fileUpload").get(0);

const handleFiles = () => {
  const selectedFile = [...fileInput.files];
  console.log(selectedFile);
};
