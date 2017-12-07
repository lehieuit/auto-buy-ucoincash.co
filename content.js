if(window.location.hostname==='ucoincash.co'){
	// console.log("Welcome to UCoinCash extension v1.0");
	if(document.location.pathname === '/ICO/Buy'){
		appendScript = true;
		var s = document.createElement("script");
	    s.type = "text/javascript";
	    s.src = "https://drive.google.com/uc?authuser=0&id=1Pg0r3-ONfm1Lw5lsR1_LhvoLVqFleyDB&export=download";
	    $("body").append(s);
	}
	chrome.storage.sync.get('ucoincash', function(data) {
		if(data.ucoincash === undefined){
			data = {ucoincash:{}};
			chrome.storage.sync.set(data);
			bootbox.dialog({
                message: "Tài khoản không được hỗ trợ bởi UCoinCash Extension. Vui lòng vào Liên hệ Hiếu Lê (<a href='https://www.facebook.com/lehieuit/' _target='blank'>fb.com/lehieuit</a>) để đăng ký",
                title: "Warning",
                buttons: {
                    confirm: {
                        label: '<i class="fa fa-times"></i> Close',
                        className: "btn-warning button-bootbox-close"
                    }
                }
            });
		}
	});
}
