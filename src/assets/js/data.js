function  getgoodList(){
	
	var goodlist =  [
			               { name: '爆款专区', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
			               { name: '热销专区', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']},
			               { name: '王者炒饭', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
			               { name: '王者炒面', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
			               { name: '王者小吃', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8']},
			               { name: '夏日冷饮', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
			               { name: '菜单7', data: ['1.1', '1.2', '1.3', '1.4']},
			               { name: '菜单8', data: ['1.1', '1.2']},
			             ]
						 
      return goodlist
}

function  getshopList(){
	
	var shopList = [ //需要一个二维的列表
				 [{		
					// 外卖种类编号
					type: "hot01", //外卖的种类
				    // 订餐单项编号
					itemNum:"h1001",
					shopname:"葱油大饼",
					picUrl: require('@/assets/detail/waimai2.jpg'), //外卖的封面
					score: 4.7,
					count: 398,
					distance: 1.1,
					time: 30,
					price: 15,
					unite_price:18,
					//订购数量
					ordNum:0
				},
				{
					type: "hot01", //外卖的种类
					// 外卖种类编号
					itemNum:"h1002",
					shopname:"螺狮粉",
					picUrl: require('@/assets/list/luoshifen.jpg'), //外卖的封面
					score: 9.3,
					count: 11232,
					distance: 10.3,
					time: 54,
					price: 15,
					unite_price:38,
					ordNum:0,
					//订购数量
					ordNum:0
				},
				{
					type: "hot01", //外卖的种类
					// 外卖种类编号
					itemNum:"h1003",
					shopname:"藤椒鸡丝面",
					picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
					score: 9.3,
					count: 11232,
					distance: 10.3,
					time: 54,
					price: 15,
					unite_price:38,
					//订购数量
					ordNum:0
				 },
				 {
					 type: "hot01", //外卖的种类
					 // 外卖种类编号
					 itemNum:"h004",
					 shopname:"藤椒鸡丝面",
					 picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
					 score: 9.3,
					 count: 11232,
					 distance: 10.3,
					 time: 54,
					 price: 15,
					 unite_price:38,
					//订购数量
					 ordNum:0
				   }
				
				
				],
				
				[{
					 type: "hot02", //外卖的种类
				    // 外卖种类编号
		             itemNum:"h2001",
					 shopname:"新旺快餐",
					 picUrl: require('@/assets/detail/waimai3.jpg'), //外卖的封面
					 score: 1.7,
					 count: 298,
					 distance: 5.1,
					 time: 10,
					 price: 25,
					 unite_price:30,
					 //订购数量
					 ordNum:0
				},
				{
					 type: "hot02", //外卖的种类
					 // 外卖种类编号
					 itemNum:"h2002",
					 shopname:"米大嫂中式简餐",
					 picUrl: require('@/assets/detail/chaomian1.jpg'), //外卖的封面
					 score: 2.3,
					 count: 232,
					 distance: 8.3,
					 time: 24,
					 price: 10,
					 unite_price:18,
					 //订购数量
					 ordNum:0
				 },
				 {
					 type: "hot02", //外卖的种类
					 // 外卖种类编号
					 itemNum:"h2003",
					 shopname:"藤椒鸡丝面",
					 picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
					 score: 9.3,
					 count: 11232,
					 distance: 10.3,
					 time: 54,
					 price: 15,
					 unite_price:38,
					 //订购数量
					 ordNum:0
				  },
				  {
					 type: "hot02", //外卖的种类
					 // 外卖种类编号
					 itemNum:"h2004",
					 shopname:"藤椒鸡丝面",
					 picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
					 score: 9.3,
					 count: 11232,
					 distance: 10.3,
					 time: 54,
					 price: 15,
					 unite_price:38,
					 //订购数量
					 ordNum:0
				     }			
				
				   ],
				   
				   [{
				   	 type: "hot03", //外卖的种类
				       // 外卖种类编号
				        itemNum:"h3001",
				   	 shopname:"新旺快餐1",
				   	 picUrl: require('@/assets/detail/waimai3.jpg'), //外卖的封面
				   	 score: 1.7,
				   	 count: 298,
				   	 distance: 5.1,
				   	 time: 10,
				   	 price: 25,
				   	 unite_price:30,
				   	 //订购数量
				   	 ordNum:0
				   },
				   {
				   	 type: "hot03", //外卖的种类
				   	 // 外卖种类编号
				   	 itemNum:"h3002",
				   	 shopname:"米大嫂中式简餐1",
				   	 picUrl: require('@/assets/detail/chaomian1.jpg'), //外卖的封面
				   	 score: 2.3,
				   	 count: 232,
				   	 distance: 8.3,
				   	 time: 24,
				   	 price: 10,
				   	 unite_price:18,
				   	 //订购数量
				   	 ordNum:0
				    },
				    {
				   	 type: "hot03", //外卖的种类
				   	 // 外卖种类编号
				   	 itemNum:"h3003",
				   	 shopname:"藤椒鸡丝面1",
				   	 picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
				   	 score: 9.3,
				   	 count: 11232,
				   	 distance: 10.3,
				   	 time: 54,
				   	 price: 15,
				   	 unite_price:38,
				   	 //订购数量
				   	 ordNum:0
				     },
				     {
				   	 type: "hot03", //外卖的种类
				   	 // 外卖种类编号
				   	 itemNum:"h3004",
				   	 shopname:"藤椒鸡丝面1",
				   	 picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
				   	 score: 9.3,
				   	 count: 11232,
				   	 distance: 10.3,
				   	 time: 54,
				   	 price: 15,
				   	 unite_price:38,
				   	 //订购数量
				   	 ordNum:0
				        }			
				   
				      ]
			 
			    ]
						 
      return shopList
}
/*  可以在vuecli应用外部的js文件 */
/*  可以把静态数据放到js文件中 */
export {  getgoodList, getshopList}