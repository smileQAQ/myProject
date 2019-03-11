	/*function getcss(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]

	}*/
	var map = {
		/*块大小*/
		block_size : 16,

		/*地图关键字*/
		keys : [
			{id : 0, color : '#888', z : 0},
			{id : 1, color : '#555', z : 1, bounce : 0.4},
			{id : 2, color : '#e40000' , z : 0},
			{id : 3, color : '#888', z : 0, current : 0},
			{id : 4, color : '#888', z : 0, current : 0},
			{id : 5, color : 'rgb(29,164,39)', z : 0, current : 0},
			{id : 6, color : '#6f6f6f', z : 0, jump : true},
			{id : 7, color : 'rgba(121, 220, 242, 0.4)', z : 0, Water_resistance:{x:0.9, y:0.9}, G:{x:0,y:0.1} ,jump:true ,Water_flow:1.5},
			{id : 8, color : '#555', z : 1, current : 0},
			{id : 9, color : 'rgba(43,103,154,0.7)', z : 0, current : 0},
			{id : 10, color : 'rgba(169,222,41,0.8)', z : 0, current : 0},
			{id : 11, color : 'rgba(186,116,16,0.7)', z : 1, v_speed : 10},
			{id : 12, color : 'rgba(182,54,224,0.8)', z : 1, bounce: 1.1},
			{id : 13, color : 'rgb(227,132,212)', z : 0}

		],

		/*地图*/
		map_context : [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,7,9,7,9,7,9,7,7,7,9,7,7,7,7,9,7,7,7,7,7,7,7,7,7,9,7,7,7,7,9,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,5,0,0,7,7,7,9,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,0,1,1,0,0,7,7,7,9,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,9,7,7,7,9,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,1],
			[1,0,10,1,0,0,1,0,0,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,7,9,7,7,7,9,7,7,7,7,7,7,7,7,9,7,7,7,7,9,7,7,7,7,9,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,9,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,1],
			[1,0,5,1,0,0,1,0,0,7,9,7,7,7,7,7,7,7,7,7,7,7,7,9,7,7,7,7,9,7,7,7,7,9,7,7,7,7,9,7,7,7,9,7,7,7,7,7,7,7,9,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,8,8,1,1,4,4,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,4,4,4,0,1,0,0,0,1,0,0,0,0,0,0,1,4,4,1,0,0,0,0,0,1,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,8,8,1,0,0,0,0,0,1,0,0,0,0,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,2,2,2,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,6,6,6,0,0,0,0,0,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1,6,6,6,0,0,0,0,0,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,6,6,6,1,1,1,1,1,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,1,0,0,0,1,6,6,6,2,2,2,2,2,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,8,8,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,8,8,8,8,0,0,0,0,0,0,0,0,0,1,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,8,8,0,0,0,0,0,0,0,8,8,0,8,8,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,6,1,1,1,1,1,6,6,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,1,13,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,1,1,1,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,2,2,2,2,2,6,6,6,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,1,1,1,1,1,6,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,0,0,0,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,6,6,6,1],
			[1,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,12,12,1,6,6,6,6,6,6,6,6,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,3,3,1,3,3,3,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,5,1],
			[1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1]
			],
			
		/*重力*/
		G : {
			x : 0,
			y : 0.3
		},

		/*最高速度*/
		max_speed : {
			x : 2,
			y : 16
		},

		/*加速度*/
		mapV_speed : {
			x : 0.2,
			y : 0.2,
			jump : 6
		},


		/*玩家初始位置*/
		map_player : {
			x : 2,
			y : 40,
			color : '#FF9900'
		}
	};

	var ball = function(){
		this.limit_viewport = false;
		
		this.viewport = {
	        x: 0,
	        y: 0
	    };
	    
	    this.camera = {
	        x: 0,
	        y: 0
	    };
		this.cc = 0;

		this.player = {
			/*当前位置*/
			loc : {
				x : 0,
				y : 0
			},

			/*当前加速度*/
			v_speed : {
				x : 0,
				y : 0
			},

			/*跳跃设置*/
			can_jump : true,
			death : 0
		}

		/*按键设置*/
		this.key = {
			left : false,
			up : false,
			right : false
		}

		window.onkeydown = this.keydown.bind(this); 
   	 	window.onkeyup   = this.keyup.bind(this);
	}

	var trap = function (){
		this.Spikeweed_white = {
			color : '#fff',
			flag : false
		}

		this.Invisible_block = {
			color : '#555',
			z : 1
		}

		this.Disappear_block = {
			color : '#888',
			z : 0
		}

	}

	trap.prototype.Get_adjacent_block = function(amis, map){ //获取相邻的块
		var ObjNum = 0;
		var storageObj = {};
		for(var x = 0; x < map.length; x++){
			for(var y = 0; y < map[0].length; y++){
				if(amis.current == map[x][y].current){
					var i=y;
					var j=y;
					while(map[x][i].id == amis.id){
						storageObj[ObjNum] = map[x][i];
						i++;
						ObjNum++;
					}

					while(map[x][j].id == amis.id){
						
						storageObj[ObjNum] = map[x][j];
						j--;
						ObjNum++;
					}

					return storageObj;
				}
			}
		}
	}

	trap.prototype.SpikeweedBlock = function(amis, map){

		var connection_block = this.Get_adjacent_block(amis, map);
		for(var i=0; i < Object.getOwnPropertyNames(connection_block).length ; i++){
			connection_block[i].color = this.Spikeweed_white.color;
		}
	}

	trap.prototype.InvisibleBlock = function(amis, map){

		var connection_block = this.Get_adjacent_block(amis, map);
		for(var i=0; i < Object.getOwnPropertyNames(connection_block).length ; i++){
			connection_block[i].color = this.Invisible_block.color;
			connection_block[i].z = this.Invisible_block.z;
		}
	}

	trap.prototype.DisappearBlock = function(amis, map){

		var _this = this;
		setTimeout(function(){
			var connection_block = _this.Get_adjacent_block(amis, map);
			for(var i=0; i < Object.getOwnPropertyNames(connection_block).length ; i++){
				connection_block[i].color = _this.Disappear_block.color;
				connection_block[i].z = _this.Disappear_block.z;
			}
		},30);
	}

	ball.prototype.Clone = function(obj1, obj2, a){//克隆元素
		for(var attr in obj2){
			obj1[attr] = obj2[attr];
		}
		obj1['current'] = a;
	}

	ball.prototype.GetOneBlockArray = function(current){
		for(var y = 0; y < this.cmap.map_context.length; y++){
			for(var x = 0; x < this.cmap.map_context[0].length; x++){
				if(current == this.cmap.map_context[y][x].current){	
					var block = this.cmap.map_context[y][x];
					return {x,y,block};
				}
			}
		}
	}

	ball.prototype.load_map = function(map){
		
		/*数据初始化*/
		this.cmap = map;
		this.cmap.block_size = map.block_size || 16;
		this.cmap.G = map.G || 0.3;
		this.cmap.width_block = 0;
		this.cmap.height_block = 0;
		this.current_text = 1;

		var _this = this;

		map.keys.forEach(function (key){ //获取keys里面的数据

			map.map_context.forEach(function (row, y){ //遍历二维数组

				_this.cmap.height_block = y; //设置二维数组的行数
				row.forEach(function (amis, x){ //遍历一维数组

					_this.cmap.width_block = x; //设置二维数组的列数
					if(amis == key.id ){ //通过key的id与二维数组的值进行判断
						_this.cmap.map_context[y][x] = key; //将key里面的值全部赋值到二维数组指定的值
					}

					if(
						(_this.cmap.map_context[y][x].id == 4 && key.id == 4) || 
						(_this.cmap.map_context[y][x].id == 3 && key.id == 3) || 
						(_this.cmap.map_context[y][x].id == 5 && key.id == 5) || 
						(_this.cmap.map_context[y][x].id == 8 && key.id == 8) ||
						(_this.cmap.map_context[y][x].id == 10 && key.id == 10)
					){

						_this.cmap.map_context[y][x] = {};
						_this.Clone(_this.cmap.map_context[y][x], key, _this.current_text);
						_this.current_text++;
					}
				});
			});
		});

		this.cmap.width_block_size = this.cmap.width_block * this.cmap.block_size; //地图的总长
		this.cmap.height_block_size = this.cmap.height_block * this.cmap.block_size; //地图的总宽

		/*初始化球属性*/
		this.player.loc.x = map.map_player.x * this.cmap.block_size ; 
		this.player.loc.y = map.map_player.y * this.cmap.block_size ;
		this.player.color = map.map_player.color || '#FF9900';


		this.key.left = false;
		this.key.up = false;
		this.key.right = false;

		this.player.v_speed = {
			x : 0,
			y : 0
		};
	}

	ball.prototype.keydown = function (e){ //键盘事件
		var ev = e || event;
		var _this = this;

		switch(ev.keyCode){
			case 37:
				_this.key.left = true;
				break;
			case 38:
				_this.key.up = true;
				break;
			case 39:
				_this.key.right = true;
				break;
		}
	}

	ball.prototype.keyup = function (e){
		var ev = e || event;
		var _this = this;

		switch(ev.keyCode){
			case 37:
				_this.key.left = false;
				break;
			case 38:
				_this.key.up = false;
				break;
			case 39:
				_this.key.right = false;
				break;
		}
	}

	ball.prototype.draw_ball = function (ctx){ //绘画小球
		ctx.fillStyle = this.player.color;

		ctx.beginPath();

		ctx.arc(
			this.player.loc.x + this.cmap.block_size / 2 - this.camera.x,
			this.player.loc.y + this.cmap.block_size / 2 - this.camera.y,
			this.cmap.block_size / 2 - 1,
			0,
			Math.PI * 2
		);
		ctx.fill();
	}



	ball.prototype.draw_map = function (ctx){//绘画地图\

		for(var y = 0; y < map.map_context.length; y++){
			for(var x = 0; x < map.map_context[0].length; x++){

				var block_x = x * this.cmap.block_size - this.camera.x;
				var block_y = y * this.cmap.block_size - this.camera.y;

				if(block_x < -this.cmap.block_size
                || block_y < -this.cmap.block_size
                || block_x > this.viewport.x
                || block_y > this.viewport.y) continue;

				this.draw_amis(block_x, block_y, this.cmap.map_context[y][x], ctx);
			}
		}
	}

	ball.prototype.move_ball = function(){ //小球移动

		/*小球下次移动的位置*/
		var ball_will_X = this.player.loc.x + this.player.v_speed.x;
		var ball_will_Y = this.player.loc.y + this.player.v_speed.y;

		var offset = Math.round(this.cmap.block_size / 2) - 1; //小球半径
		var block = this.getNearby_block(Math.round(this.player.loc.x / this.cmap.block_size), Math.round(this.player.loc.y / this.cmap.block_size)); //小球当前的位置

		if(block.G){
			this.player.v_speed.x += block.G.x;
			this.player.v_speed.y += block.G.y;
		}else{
			/*小球受重力影响*/
			this.player.v_speed.x += this.cmap.G.x;
			this.player.v_speed.y += this.cmap.G.y;
		}

		/*在水中的影响*/
		if(block.Water_resistance){
			this.player.v_speed.x *= block.Water_resistance.x;
			this.player.loc.x -= block.Water_flow;
			this.player.v_speed.y *= block.Water_resistance.y;
		}

		var B_Y_up = Math.floor(ball_will_Y / this.cmap.block_size);
		var	B_Y_down = Math.ceil(ball_will_Y / this.cmap.block_size);
		var nearY_up = Math.round((this.player.loc.y - offset) / this.cmap.block_size);
		var nearY_down = Math.round((this.player.loc.y + offset) / this.cmap.block_size);

		var B_X_left = Math.floor(ball_will_X / this.cmap.block_size);
		var B_X_right = Math.ceil(ball_will_X / this.cmap.block_size);
		var nearX_left = Math.round((this.player.loc.x - offset) / this.cmap.block_size);
		var nearX_right = Math.round((this.player.loc.x + offset) / this.cmap.block_size);

		/*得到小球将要走的周围的块信息*/
		var getNearBlock_Y_up1 = this.getNearby_block(nearX_left, B_Y_up);
		var getNearBlock_Y_up2 = this.getNearby_block(nearX_right, B_Y_up);
		var getNearBlock_Y_down1 = this.getNearby_block(nearX_left, B_Y_down);
		var getNearBlock_Y_down2 = this.getNearby_block(nearX_right, B_Y_down);
		var getNearBlock_X_left1 = this.getNearby_block(B_X_left, nearY_up);
		var getNearBlock_X_left2 = this.getNearby_block(B_X_left, nearY_down);
		var getNearBlock_X_right1 = this.getNearby_block(B_X_right, nearY_up);
		var getNearBlock_X_right2 = this.getNearby_block(B_X_right, nearY_down);

		/*得到小球当前的某一侧的块信息*/
		var Left = this.getNearby_block(nearX_left, Math.round(this.player.loc.y / this.cmap.block_size));
		var Right = this.getNearby_block(nearX_right, Math.round(this.player.loc.y / this.cmap.block_size));
		var Down = this.getNearby_block(Math.round(this.player.loc.x / this.cmap.block_size), nearY_down);
		var Up = this.getNearby_block(Math.round(this.player.loc.x / this.cmap.block_size), nearY_up);

		/*限制移动中的速度*/
		this.player.v_speed.x = (this.player.v_speed.x >= -this.cmap.max_speed.x) ? this.player.v_speed.x : this.cmap.max_speed.x;
		this.player.v_speed.x = (this.player.v_speed.x <= this.cmap.max_speed.x) ? this.player.v_speed.x : this.cmap.max_speed.x;
		this.player.v_speed.y = (this.player.v_speed.y >= -this.cmap.max_speed.y) ? this.player.v_speed.y : -this.cmap.max_speed.y;
		this.player.v_speed.y = (this.player.v_speed.y <= this.cmap.max_speed.y) ? this.player.v_speed.y : this.cmap.max_speed.y;

		/*移动*/
		this.player.loc.x += this.player.v_speed.x;
		this.player.loc.y += this.player.v_speed.y;

		/*移动缓冲*/
		this.player.v_speed.x *= .9;

		if(this.cc > 30 && block.jump){
			this.player.can_jump=true;
			this.cc=0;
		}else{
			this.cc ++;
		}
		

		/*障碍判断*/
		this.panduan_X(getNearBlock_X_left1, getNearBlock_X_left2, getNearBlock_X_right1, getNearBlock_X_right2, nearY_up, nearY_down);
		this.panduan_Y(getNearBlock_Y_up1, getNearBlock_Y_up2, getNearBlock_Y_down1, getNearBlock_Y_down2, nearX_left, nearX_right);

		/*加速带*/
		if(getNearBlock_Y_down1.id == 11 || getNearBlock_Y_down2.id == 11){
			this.cmap.max_speed.x = 6;
			this.player.v_speed.x += this.cmap.keys[11].v_speed;
		}

		/*判断隐形障碍*/
		if(getNearBlock_Y_up1.id == 4 || getNearBlock_Y_up2.id == 4) {
			if(this.player.v_speed.y < 0){
				var top_block = getNearBlock_Y_up1.id == 4 ? getNearBlock_Y_up1 : getNearBlock_Y_up2;
				trap.InvisibleBlock(top_block, this.cmap.map_context);
			}
			this.panduan_Y(getNearBlock_Y_up1, getNearBlock_Y_up2, getNearBlock_Y_down1, getNearBlock_Y_down2, nearX_left, nearX_right);
		}

		/*判断地刺*/
		if(Down.id == 3 || Left.id == 3 || Right.id == 3){
			if(this.player.v_speed.y > 0){
				var down_block = getNearBlock_Y_down1.id == 3 ? getNearBlock_Y_down1 : getNearBlock_Y_down2;
				trap.SpikeweedBlock(down_block, this.cmap.map_context);
				trap.Spikeweed_white.flag = false;
			}

			if(trap.Spikeweed_white.flag){
				alert("你死了"+(++this.player.death)+"次");
				death.innerHTML = "你死了"+(this.player.death)+"次";
				this.Re_load_map();
			}
			trap.Spikeweed_white.flag = true;
		}
		
		/*判断火海*/
		if(block.id == 2){
			death.innerHTML = "你死了"+(++this.player.death)+"次";
			this.Re_load_map();
		}

		/*判断延迟消失块*/
		if(getNearBlock_Y_down1.id == 8 || getNearBlock_Y_down2.id == 8){
			var downblock = getNearBlock_Y_down1.id == 8 ? getNearBlock_Y_down1 : getNearBlock_Y_down2;
			trap.DisappearBlock(downblock, this.cmap.map_context);
		}

		/*判断水中炸弹*/
		if(Down.id == 9 || Left.id == 9 || Right.id == 9 || Up.id == 9){
			death.innerHTML = "你死了"+(++this.player.death)+"次";
			this.Re_load_map();
		}

		/*判断存档点*/
		if(block.id == 5){
			var thisBlock = this.GetOneBlockArray(block.current);
			backupMap.map_player.x = thisBlock.x;
			backupMap.map_player.y = thisBlock.y;
			this.cmap.map_context[thisBlock.y][thisBlock.x].color = 'rgb(29, 239, 39)';
		}

		/*判断传送点*/
		if(block.id == 10){
			var thisBlock = this.GetOneBlockArray(block.current - 1);
			if(thisBlock!=undefined && thisBlock.block.id == 10){
				this.player.loc.x = thisBlock.x * this.cmap.block_size;
				this.player.loc.y = thisBlock.y * this.cmap.block_size;
			}
		}

		/*通关*/
		if(block.id == 13){
			var timeNum = document.querySelector('#time');
			alert("通关成功，你死了"+this.player.death+"次， 耗时："+timeNum.innerHTML);
			backupMap.map_player.x = 2;
			backupMap.map_player.y = 40;
			this.player.death = 0;
			death.innerHTML = "你死了"+(++this.player.death)+"次";
			this.Re_load_map();
			clearInterval(Time.timer);
			Time.n=0;
			Time.m=0;
			Time.times();
		}

		var camera_x = Math.round(this.player.loc.x - this.viewport.x/2); //摄像头相对于地图左边境的距离
	    var camera_y = Math.round(this.player.loc.y - this.viewport.y/2); //摄像头相对于地图上边境的距离
	    var centerDistance_x = Math.abs(camera_x - this.camera.x); //小球中心与摄像头中心的x距离
	    var centerDistance_y = Math.abs(camera_y - this.camera.y); //小球中心与摄像头中心的y距离
	    
	    if(centerDistance_x > 5) {
	        
	        var camera_speed = Math.round(Math.max(1, centerDistance_x * 0.1)); //摄像头向x移动的速度
	    
	        if(camera_x != this.camera.x) {
	            
	            this.camera.x += camera_x > this.camera.x ? camera_speed : -camera_speed;
	            
	            if(this.limit_viewport) {
	                
	                this.camera.x =  Math.min(this.cmap.width_block_size - this.viewport.x + this.cmap.block_size, this.camera.x); 
	                
	                this.camera.x = Math.max(0, this.camera.x); 
	            }
	        }
	    }
	    
	    if(centerDistance_y > 5) { 
	        
	        var camera_speed = Math.round(Math.max(1, centerDistance_y * 0.1)); //摄像头向y移动的速度
	        
	        if(camera_y != this.camera.y) {
	            
	            this.camera.y += camera_y > this.camera.y ? camera_speed : -camera_speed;
	        
	            if(this.limit_viewport) {
	                
	                this.camera.y = Math.min(this.cmap.height_block_size - this.viewport.y + this.cmap.block_size,this.camera.y); 
	                
	                this.camera.y = Math.max(0,this.camera.y);
	            }
	        }
	    }
	}

	/*判断Y轴是否接触id为1的块*/
	ball.prototype.panduan_Y = function(up1, up2, dowm1, dowm2, left1, right1){
		if(up1.z || up2.z || dowm1.z || dowm2.z){

			while(this.getNearby_block(left1, Math.floor(this.player.loc.y / this.cmap.block_size)).z || this.getNearby_block(right1, Math.floor(this.player.loc.y / this.cmap.block_size)).z)
				this.player.loc.y += 0.1;

			while(this.getNearby_block(left1, Math.ceil(this.player.loc.y / this.cmap.block_size)).z || this.getNearby_block(right1, Math.ceil(this.player.loc.y / this.cmap.block_size)).z)
				this.player.loc.y -= 0.1;

			
			var bounce = 0;

			bounce = (up1.z && up1.bounce > bounce) ? up1.bounce : 
					 (up2.z && up2.bounce > bounce) ? up2.bounce : 
				   	 (dowm1.z && dowm1.bounce > bounce) ? dowm1.bounce : 
					 (dowm2.z && dowm2.bounce > bounce) ? dowm2.bounce : bounce;

			this.player.v_speed.y *= -bounce;

			this.player.can_jump = (dowm1.z || dowm2.z) ? true : false;
		}
	}

	ball.prototype.panduan_X = function(left1, left2, right1, right2, up1, down1){
		if(left1.z || left2.z || right1.z || right2.z){

			while(this.getNearby_block(Math.floor(this.player.loc.x / this.cmap.block_size), up1).z || this.getNearby_block(Math.floor(this.player.loc.x / this.cmap.block_size), down1).z)
				this.player.loc.x += 0.1;

			while(this.getNearby_block(Math.ceil(this.player.loc.x / this.cmap.block_size), up1).z || this.getNearby_block(Math.ceil(this.player.loc.x / this.cmap.block_size), down1).z)
				this.player.loc.x -= 0.1;
		}
	}

	/*重新加载地图*/
	ball.prototype.Re_load_map = function(){
		this.cmap = JSON.parse(JSON.stringify(backupMap));
		this.load_map(this.cmap);
	}

	/*键盘操作小球*/
	ball.prototype.update_ball = function (){
		if(this.key.left){
			if(this.player.v_speed.x > -this.cmap.max_speed.x){
				this.player.v_speed.x -= this.cmap.mapV_speed.x;
			}
		}

		if(this.key.up){
			if(this.player.can_jump && this.player.v_speed.y > -this.cmap.max_speed.y){
				this.player.v_speed.y -= this.cmap.mapV_speed.jump;
				this.player.can_jump = false;
			}
		}

		if(this.key.right){
			if(this.player.v_speed.x < this.cmap.max_speed.x){
				this.player.v_speed.x += this.cmap.mapV_speed.x;
			}
		}

		this.move_ball();
	}

	ball.prototype.update = function(){
		this.update_ball();

	}

	/*获取在二位数组指定的块*/
	ball.prototype.getNearby_block = function(x, y){
		return (this.cmap.map_context[y] && this.cmap.map_context[y][x]) ? this.cmap.map_context[y][x] : 0;
	}

	/*绘画块*/
	ball.prototype.draw_amis = function (x, y, amis,ctx){

		ctx.fillStyle = amis.color;
		ctx.fillRect(x, y, this.cmap.block_size, this.cmap.block_size);
	}

	ball.prototype.draw = function (ctx){
		this.draw_map(ctx);
		this.draw_ball(ctx);
	}

	ball.prototype.set_viewport = function (x, y) {
	    this.viewport.x = x;
	    this.viewport.y = y;
	};

	function show_block(x, y, ctx, Wblock, Hblock){
		ctx.fillStyle = '#fff';
		ctx.fillRect(x * 16, y * 16, Wblock * 16, Hblock * 16);
	}


	var canvas = document.querySelector('#canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = 300;
	canvas.height = 300;


	window.requestAnimFrame =
	  window.requestAnimationFrame ||
	  window.webkitRequestAnimationFrame ||
	  window.mozRequestAnimationFrame ||
	  window.oRequestAnimationFrame ||
	  window.msRequestAnimationFrame ||
	function(callback) {
	    return window.setTimeout(callback, 1000 / 60);
	};

	var backupMap = JSON.parse(JSON.stringify(map));
	var ball = new ball();
		ball.set_viewport(canvas.width, canvas.height);
		ball.load_map(map);
		
		ball.limit_viewport = true;
	var trap = new trap();
		

	var init_game = function(map){
		
		ctx.fillStyle = '#333';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ball.update();
		ball.draw(ctx);
	}

	var init = function (){
		init_game(map);

		window.requestAnimFrame(init);
	}


	var time = function(){
		this.n = 0;
		this.timer = null;
		this.time1 = document.querySelector('#time');
		this.m = 0;
	}

	time.prototype.times = function(){
		this.timer = setInterval(function(){
			this.n++;
			var s = parseInt(this.n / 60);
         	var ms = parseInt(this.n % 60);
         	if(s >= 60){
	         	this.m++; 
	         	s = 0;
	         	this.n = 0;
	         }
	         this.time1.innerHTML = "时间：" + this.m + "m : " + s + "s : " + ms + " ms";
		}.bind(this),1000/60);
	}
	var death = document.querySelector('#death');
	var Time = new time();
	Time.times();
	init();