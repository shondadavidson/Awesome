insert into houses
(name, address, city, state, zip, img, mortgage, rent)
values (${name}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent});

select *
from houses
order by id asc;