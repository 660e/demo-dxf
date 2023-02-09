const file = document.querySelector('#file');
const section = document.querySelector('#section');

section.onclick = () => file.click();

file.addEventListener('change', event => {
  const reader = new FileReader();

  reader.readAsBinaryString(event.target.files[0]);
  reader.onload = e => {
    if (e.target.readyState === 2) {
      const helper = new dxf.Helper(e.target.result);

      section.innerHTML = helper.toSVG();

      console.log(helper._parsed);
    } else {
      console.log('dxf文件解析失败');
    }
  };
});
