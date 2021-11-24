use	classicmodels;

select * from employees;
select * from employees;
select * from employees;

select slug from wp_term_taxonomy inner join wp_terms on wp_term_taxonomy.term_id = wp_terms.term_id where taxonomy = "pa_szín";
select * from wp_term_relationships where term_taxonomy_id in (select term_taxonomy_id from wp_term_taxonomy inner join wp_terms on wp_term_taxonomy.term_id = wp_terms.term_id where taxonomy = "pa_szín");

select count(*) from wp_term_relationships where term_taxonomy_id in (select term_taxonomy_id from wp_term_taxonomy inner join wp_terms on wp_term_taxonomy.term_id = wp_terms.term_id where taxonomy = "pa_szín");
inner join wp_term_taxonomy on term_rels.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id;

select * from (select * from wp_term_relationships where term_taxonomy_id in (select term_taxonomy_id from wp_term_taxonomy inner join wp_terms on wp_term_taxonomy.term_id = wp_terms.term_id where taxonomy = "pa_szín")) as pa;

select * from wp_term_relationships inner join wp_posts 
on wp_posts.ID = wp_term_relationships.object_id
where term_taxonomy_id in (
	select term_taxonomy_id from wp_term_taxonomy inner join wp_terms 
        on wp_term_taxonomy.term_id = wp_terms.term_id 
        where taxonomy = "pa_szín"
);

select * from wp_term_relationships inner join wp_term_taxonomy 
on wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
inner join wp_terms 
on wp_terms.term_id = wp_term_taxonomy.term_id 
where slug in ("furdoszobai-csaptelep", "burkolatok", "furdoszoba-kiegeszitok", "kadak", "konyhai-csaptelep", "mosogatok", "szaniterek", "zuhanyajto", "zuhanyfal", "zuhanykabinok","zuhanytalcak");

select object_id, slug from wp_term_relationships inner join wp_term_taxonomy 
on wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
inner join wp_terms 
on wp_terms.term_id = wp_term_taxonomy.term_id
where slug in ("furdoszobai-csaptelep", "burkolatok", "furdoszoba-kiegeszitok", "kadak", "konyhai-csaptelep", "mosogatok", "szaniterek", "zuhanyajto", "zuhanyfal", "zuhanykabinok","zuhanytalcak");

select slug, object_id, wp_terms.term_id from wp_term_taxonomy inner join wp_terms
on wp_term_taxonomy.term_id = wp_terms.term_id
inner join wp_term_relationships
on wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
where taxonomy = "pa_szín";

inner join 
(
	select object_id, slug, wp_terms.term_id from wp_term_taxonomy inner join wp_terms
	on wp_term_taxonomy.term_id = wp_terms.term_id
	inner join wp_term_relationships
	on wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
	where taxonomy = "pa_szín"
) as products_by_color
on products_by_categ.object_id = products_by_color.object_id;

select products_by_categ.slug, products_by_color.slug from (
	select object_id, slug from wp_term_relationships inner join wp_term_taxonomy 
	on wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
	inner join wp_terms 
	on wp_terms.term_id = wp_term_taxonomy.term_id
	where slug in ("furdoszobai-csaptelep", "burkolatok", "furdoszoba-kiegeszitok", "kadak", "konyhai-csaptelep", "mosogatok", "szaniterek", "zuhanyajto", "zuhanyfal", "zuhanykabinok","zuhanytalcak")
) as products_by_categ
inner join 
(
	select object_id, slug, wp_terms.term_id from wp_term_taxonomy inner join wp_terms
	on wp_term_taxonomy.term_id = wp_terms.term_id
	inner join wp_term_relationships
	on wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
	where taxonomy = "pa_szín"
) as products_by_color
on products_by_categ.object_id = products_by_color.object_id
group by products_by_categ.slug, products_by_color.slug;

select wp_terms.slug as category_slug, wp_terms_color.term_id as color_id, wp_terms_color.slug as color_slug, wp_terms_color.name as color_name  from wp_term_relationships inner join wp_term_taxonomy 
on wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
inner join wp_terms 
on wp_terms.term_id = wp_term_taxonomy.term_id and slug in ("furdoszobai-csaptelep", "burkolatok", "furdoszoba-kiegeszitok", "kadak", "konyhai-csaptelep", "mosogatok", "szaniterek", "zuhanyajto", "zuhanyfal", "zuhanykabinok","zuhanytalcak")
inner join wp_term_relationships as wp_term_relationships_color 
on wp_term_relationships.object_id = wp_term_relationships_color.object_id
inner join wp_term_taxonomy as wp_term_taxonomy_color
on wp_term_relationships_color.term_taxonomy_id = wp_term_taxonomy_color.term_taxonomy_id and wp_term_taxonomy_color.taxonomy in "pa_szín"
inner join wp_terms as wp_terms_color 
on wp_term_taxonomy_color.term_id = wp_terms_color.term_id
group by wp_terms.slug, wp_terms_color.slug


CREATE VIEW view_colors_by_categories as
select wp_terms.slug as category_slug, wp_terms_color.term_id as color_id, wp_terms_color.slug as color_slug, wp_terms_color.name as color_name  from wp_term_relationships inner join wp_term_taxonomy 
on wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
inner join wp_terms 
on wp_terms.term_id = wp_term_taxonomy.term_id and slug in ("furdoszobai-csaptelep", "burkolatok", "furdoszoba-kiegeszitok", "kadak", "konyhai-csaptelep", "mosogatok", "szaniterek", "zuhanyajto", "zuhanyfal", "zuhanykabinok","zuhanytalcak")
inner join wp_term_relationships as wp_term_relationships_color 
on wp_term_relationships.object_id = wp_term_relationships_color.object_id
inner join wp_term_taxonomy as wp_term_taxonomy_color
on wp_term_relationships_color.term_taxonomy_id = wp_term_taxonomy_color.term_taxonomy_id and wp_term_taxonomy_color.taxonomy = "pa_szín"
inner join wp_terms as wp_terms_color 
on wp_term_taxonomy_color.term_id = wp_terms_color.term_id
group by wp_terms.slug, wp_terms_color.slug

drop view view view_colors_by_categories;
create view view_colors_by_categories as
select 
	wp_terms.slug as category_slug, 
        wp_term_taxonomy_attr.taxonomy as attribute_slug,
        wp_terms_attr.term_id as attribute_value_id, 
        wp_terms_attr.slug as attribute_value_slug, 
        wp_terms_attr.name as attribute_value_name  
from wp_term_relationships inner join wp_term_taxonomy 
on wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
inner join wp_terms 
on wp_terms.term_id = wp_term_taxonomy.term_id and slug in (
	"csaptelepek", "burkolatok", "furdoszoba-kiegeszitok", "kadak", "mosogatok", "szaniterek", "zuhanyajto", "zuhanyfal", "zuhanykabinok","zuhanytalcak"
)
inner join wp_term_relationships as wp_term_relationships_color 
on wp_term_relationships.object_id = wp_term_relationships_color.object_id
inner join wp_term_taxonomy as wp_term_taxonomy_attr
on wp_term_relationships_color.term_taxonomy_id = wp_term_taxonomy_attr.term_taxonomy_id and wp_term_taxonomy_attr.taxonomy in 
("pa_szín", "pa_szoba", "pa_stilus", "pa_fogantyu", "pa_forma", "pa_elhelyezkedes", "pa_forma", "pa_forma", "pa_orientacio", "pa_uvegszin", "pa_keret-szin", "product_tag")
inner join wp_terms as wp_terms_attr 
on wp_term_taxonomy_attr.term_id = wp_terms_attr.term_id
group by wp_terms.slug, wp_terms_attr.slug
order by wp_terms.slug, wp_term_taxonomy_attr.taxonomy;