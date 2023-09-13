console.log("run");
const charpstAR = {
	element: null,
	fileType: null,
	place: 'floor',
	scale: 'fixed',
	artNo: null,
	iOSLink: null,
	androidLink: null,
	qrLang: null,
	qrModalDiv: null,
	qrModalIframe: null,
	qrCodeModalActive: false,
	viewer: null,
	variantname: null,
	select: null,

	init: function () {
		this.element = document.getElementById("charpstarARViewer");
		if (this.element) {
            console.log("enter");
			this.fileType = "reality";
			this.artNo = this.element.getAttribute("data-articleid");
			this.iOSLink = `https://js.charpstar.net/Synsam/Assets/Reality/${this.artNo}.` + this.fileType;
			this.androidLink = `https://js.charpstar.net/Synsam/Assets/Android/${this.artNo}.glb`;

			this.checkLink(this.iOSLink);
			var script1 = document.createElement('script');
			script1.src = 'https://js.charpstar.net/VTO/scripts/face_mesh.js';
			var script2 = document.createElement('script');
			script2.src = 'https://js.charpstar.net/Synsam/scripts/vto.js';
			document.head.appendChild(script1); 
			document.head.appendChild(script2); 
		}


	},


	async checkLink(url) {
		try {
			const response = await fetch(url, {
				method: 'HEAD'
			});
			const status = response.status;
			if (status === 200) {
				this.element.style.display = "block";
				this.element.addEventListener('click', this.activate.bind(this), false);
				this.checkSupport();
			} else {
				this.hideButton();
			}
		} catch (err) {
			this.hideButton();
		}
	},

	 showVTO() {
		// Create the pop-up div
		charpstarVTO.init()
	 },

	activate() {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
			this.openiOSQuickLook()(this.iOSLink);
		} else if (/android/i.test(userAgent)) {
			this.showVTO();
		} else {
			this.showVTO();
		}
	},


	checkSupport() {
		if (!this.isMobile()) {
			this.showARButton();
		} else if (this.isAndroid()) {
			this.showARButton();
		} else if (this.isiOS() || this.isiPad()) {
			this.showARButton();
		}
	},

	isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	},

	isAndroid() {
		return /Android/i.test(navigator.userAgent);
	},

	isiOS() {
		return /iPhone/i.test(navigator.userAgent);
	},

	isiPad() {
		return (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
	},

	openiOSQuickLook() {
		const anchor = document.createElement('a');
		anchor.setAttribute('rel', 'ar');
		anchor.appendChild(document.createElement('img'));
		anchor.setAttribute("id", "charpstar");
		return (usdzSrc) => {

			if (this.fileType == "reality") {
				anchor.setAttribute('href', usdzSrc);
			} 

			anchor.click();
		};
	},

	
	checkiOSSupport() {
	},

	checkAndroidSupport() {
		const userAgent = navigator.userAgent;
		if (userAgent.includes('wv')) {
			this.hideButton();
		}
	},


	showARButton() {
		if (this.element) {
			this.element.style.display = "block";
			if(this.fileType == "config" ) {
				this.element.addEventListener('click', this.activate.bind(this), false);
			}
		}
	},

	hideButton() {
		if (this.element) {
			this.element.style.display = "none";
		}
	}



};
charpstAR.init()