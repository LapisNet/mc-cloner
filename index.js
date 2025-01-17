var mcvhtml = ( version ) => `<div class="mc-v"
  onclick="(window.location.href = '${version.link}')">
  <span class="mc-text">${version.version}<br>${version.text}</span>
  <img class="mc-icon" src="icon.png">
</div>`
async function main( shc, shv, lele ){
  var versions = await (await fetch( "version.json" )).json()
  var vnames = []
  lele.innerHTML = ""
  for( let version of versions ){
    vnames.push( version.version )
    lele.innerHTML += mcvhtml( version )
  }
  shc.onclick = function(){
    lele.innerHTML = ""
    for( let vni in vnames ){
      let vn = vnames[ vni ]
      if( vn.includes( shv.value ) ){
        lele.innerHTML += mcvhtml( versions[vni] )
      }
    }
  }
}