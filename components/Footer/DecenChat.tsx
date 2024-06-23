const script = `
  var w=window, d=document;
  w.decenChat = {
    appId: 'npub15gkmu50rcuv6mzevmslyllppwmeqxulnqfak0gwud3hfwmau6mvqqnpfvg'
  };
  var e = function() {
    var s = document.createElement('script');
    s.src = 'https://client.decenchat.com/widget.js';
    d.body.appendChild(s);
  }
  d.readyState !== 'loading' ? e() : w.addEventListener("DOMContentLoaded", e);
`

export const DecenChat = () => {
    return (
        <script dangerouslySetInnerHTML={{__html: script}}>
        </script>
    )
}