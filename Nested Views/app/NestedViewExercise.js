var App = {
    Regions : {},
    Views : {},
    Models : {},
    Collections : {}
}

/*Region Models*/
App.Regions.NestedView = Marionette.Region.extend({
	el:'#nested-view-region'
})

App.Views.Channel = Marionette.ItemView.extend({
	template:'#channel-view',
	tagName:'li'
});

App.Views.Channels = Marionette.CompositeView.extend({
	itemView:App.Views.Channel,
	itemViewContainer:'ul',
	template:'#region-view',
	initialize:function(){
		this.collection=this.model.get('Channels');
	},
	buildItemView: function(item, ItemViewType, itemViewOptions){
	  // build the final list of options for the item view type
	  var options = _.extend({model: item}, itemViewOptions);
	  // create the item view instance
	  var view = new ItemViewType(options);
	  // return it
	  return view;
	}
	/*appendHtml: function(collectionView, itemView, index){
		collectionView.$el.append(itemView.el);
	}*/
});

App.Views.Regions = Marionette.CollectionView.extend({
	itemView : App.Views.Channels,
	initialize:function(model){
		this.collection = model.get('Regions');

	},

});

App.Models.Region = Backbone.Model.extend({
	defaults:{
		RegionId:'',
		RegionName:'',
		Channels:null
	},
	initialize: function(){
		this.set('Channels',new App.Collections.Channels(this.get('Channels')))

	},
	getType:function(){
		return 'App.Models.Region';
	}
});

App.Collections.Regions = Backbone.Collection.extend({
	model:App.Models.Region,
	getType:function(){
		return 'App.Models.Regions';
	}
});

/*Channel Models*/

App.Models.Channel = Backbone.Model.extend({
	defaults:{
		ChannelId:'',
		ChannelName:''
	},
	getType:function(){
		return 'App.Models.Channel';
	}
});

App.Collections.Channels = Backbone.Collection.extend({
	model:App.Models.Channel,
	getType:function(){
		return 'App.Models.Channels';
	}
});

App.Models.NestedView = Backbone.Model.extend({
	defaults:{
		Regions:null
	},
	initialize: function(){
		console.log(this.get('Regions'));
		this.set('Regions',new App.Collections.Regions(this.get('Regions')));
		
	}

});

