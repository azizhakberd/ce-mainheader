class HeaderBar extends HTMLElement {
	 
	get header() {
		return this.firstChild.textContent
	}
	
	set header(val) {
		this.firstChild.textContent = val
	}
	
	get describe() {
		return this.lastChild
	}
	
	set describe(val) {
		this.lastChild.textContent = val
	}
	
	connectedCallback() {
		let thisTag = 'header-bar'
		
		if (document.getElementsByTagName(thisTag).length > 1) return;
		
		let header = this.getAttribute('header')
		let describe = this.getAttribute('describe')
		
		const shadow = this.attachShadow({mode: 'open'})
		
		let shadowHeader = document.createElement('div')
		shadowHeader.textContent = header
		shadowHeader.classList.add('header')
		
		let shadowDescribe = document.createElement('div')
		shadowDescribe.textContent = describe
		shadowDescribe.classList.add('describe')
		
		document.body.style.marginTop = '400px'
		
		shadow.innerHTML = '<link rel="stylesheet" href="shadowstyle.css">'
		shadow.append(shadowHeader)
		shadow.append(shadowDescribe)
		
		document.addEventListener('scroll', handler)

		function handler() {
			let thiss = document.getElementsByTagName(thisTag)[0]
			let docelem = document.documentElement
			
			let rscroll
			
			if (docelem.scrollTop < 300) {
				rscroll = docelem.scrollTop/3
			} else {
				rscroll = 100
			}
			
			thiss.style.height = 400 - rscroll*3
			thiss.style.opacity = 1 - rscroll/200
			
		}
	}
}

customElements.define('header-bar', HeaderBar)
