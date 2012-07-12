
(function(){
	
	xtag.register('[is=x-panel]', {
		mixins: ['request'],
		onCreate: function(){
			this.dataready = this.dataready || function(request){
				this.innerHTML = request.responseText;
			}
		}
	});
	
})();