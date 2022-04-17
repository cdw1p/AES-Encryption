function formSubmit() {
  const encryptMethod = ['Enkripsi', 'Deskripsi']
  const inputString = $('textarea[id=textInput]').val()
  const inputPassword = $('input[id=textPassword]').val()
  const encryptString = $('input:radio[name=textEncrypt]:checked').val()
  if (inputString.length < 1) {
    $('textarea[id=textInput]').focus()
  } else if (inputPassword.length < 5) {
    alert('Key enkripsi minimal 5 karakter')
  } else {
    if (encryptMethod.find(data => data === encryptString)) {
      let encryptResult = ''
      if (encryptString === 'Enkripsi') {
        encryptResult = CryptoJS.AES.encrypt(inputString, inputPassword).toString()
      } else if (encryptString === 'Deskripsi') {
        encryptResult = CryptoJS.AES.decrypt(inputString, inputPassword).toString(CryptoJS.enc.Utf8)
      } else {
        alert('Metode yang dipilih tidak valid')
      }
      $('textarea[id=textOutput]').val(encryptResult)
    }
  }
}