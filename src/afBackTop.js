var afBackTop = {

	elementDiv: null,
	icon: null,
	effect: null,

	validadeType: function(data, type, mensage){

		if(data != "" && data != null){

			if(typeof data != type){
				console.log(mensage);
				return false;
			}
			else{
				return true;
			}

		}
	},

	clickButtonBack: function(){

		$(this.elementDiv).click(function(){
			
			$('html,body').animate({
           		scrollTop: 0
        	}, 700);

		});
	},

	checkHeightScreen: function(element, effect){

       	$(window).scroll(function () {

			var scrollTopHeight = $(window).scrollTop();
			var scrollTopScreen = 150;

		    if(scrollTopHeight >= scrollTopScreen){

		    	if(effect == 'slide'){
		    		$(element).slideDown();
		    	}
		    	else{
		    		$(element).fadeIn();
		    	}
				
			}
			else{
				
				if(effect == 'slide'){
		    		$(element).slideUp();
		    	}
		    	else{
		    		$(element).fadeOut();
		    	}

			}

		});
	},

	printButtonPage: function(target){

		$(target).html('<i class="' + this.validateNull(this.icon, 'fa fa-chevron-up') + '"></i>');

		$(target).css({ 
			position: "fixed",
			right: "15px",
			bottom: "10px",
			fontSize: "40px",
			cursor: "pointer",
			display: "none"
		});
	},

	validateNull: function(data, value){

		if(data == null || data == ""){
			data = value;
		}
		else{
			data = data;
		}

		return data;

	},

	validateData: function() {

		var controlDatas = null;

		controlDatas += this.validadeType(this.elementDiv, 'string', 'elementDiv: Tipo de elemento inválido.');
		controlDatas += this.validadeType(this.validateNull(this.icon, 'fa fa-chevron-up'), 'string', 'icon: Tipo de icone inválido.');
		controlDatas += this.validadeType(this.validateNull(this.effect, 'fade'), 'string', 'effect: Tipo de efeito inválido.');

		console.log(controlDatas);

		if (controlDatas > 2) {
			this.printButtonPage(this.elementDiv);
		}
	},

	init: function(param) {
		this.elementDiv = param.elementDiv;
		this.icon = param.icon;
		this.showAfterHeight = param.showAfterHeight;
		this.effect = param.effect;
		this.timeBackTop = param.timeBackTop;

		this.validateData();
		this.clickButtonBack();
		this.checkHeightScreen(this.elementDiv, this.effect);
	}
}
