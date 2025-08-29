show databases;

-- dev라는 database를 사용하겠다 --
use dev;	

show tables;		-- table을 보여달라 --

select *
from customers;

-- 아래부터 교재저자 sql db 연결 된 상태 --
select *
from t_category;

select *
from t_image;
-- where type = 3 9번상품, ype=2, path:sample.jpg

select *
from t_product;

select *
from t_user;
-- insert into t_user set ? on duplicate key update ? --
-- ↑중복키가 있으면 update, 없으면 insert --
insert into 	t_user 
set 			email='hong@example.com',
				type=1,
                nickname='홍길동'
on duplicate key update type=2,nickname='홍길동';

select *
from t_seller;

-- productList --
select  	t1.*
	      , t2.path
          , t3.category1, t3.category2, t3.category3 
from 		t_product t1, 
			t_image t2, 
			t_category t3
where 		t1.id = t2.product_id 
and 		t2.type = 1 
and 		t1.category_id = t3.id;

-- productList2 --
select 		t3.*, t4.path 
from 		(select t1.*, t2.category1, t2.category2, t2.category3 
from 		t_product t1, 
			t_category t2
where 		t1.category_id = t2.id) t3
left join 	(select  * 
			   from  t_image 
               where type=1) t4
				on 	 t3.id = t4.product_id;
                
-- productDetail --
select 		t1.*, 
			t2.path, 
            t3.category1, 
            t3.category2, 
            t3.category3 
from 		t_product t1, 
			t_image t2, 
			t_category t3
where 		t1.id = 1 
and 		t1.id = t2.product_id 
and 		t2.type = 3 
and 		t1.category_id = t3.id;
