var regionsHistory = {"Regions":[{
	'RegionId':'101',
	'RegionName':'Us Region',
	'Channels':[
		{
			'ChannelId':'1001',
			'ChannelName':'Us Channel 1'
		},
		{
			'ChannelId':'1002',
			'ChannelName':'Us Channel 2'
		}
	]},
	{
	'RegionId':'102',
	'RegionName':'UK Region',
	'Channels':[
		{
			'ChannelId':'1003',
			'ChannelName':'UK Channel 3'
		},
		{
			'ChannelId':'1004',
			'ChannelName':'UK Channel 4'
		}
	]},
	{
	'RegionId':'103',
	'RegionName':'Asia Pacific Region',
	'Channels':[
		{
			'ChannelId':'1005',
			'ChannelName':'Asia Channel 5'
		},
		{
			'ChannelId':'1006',
			'ChannelName':'Asia Channel 6'
		}
	]}
]};
var nestedRegions = new App.Models.NestedView(regionsHistory);
var view = new App.Views.Regions(nestedRegions);
var domRegion = new App.Regions.NestedView();
//view.render();
domRegion.show(view);
//$('#nested-view-region').html(view.el);

