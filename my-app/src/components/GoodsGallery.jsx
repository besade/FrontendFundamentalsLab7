import GoodsCard from './GoodsCard';

function GoodsGallery() {
    const products = [
        {
            id: 1,
            name: "Електрогітара Jackson JS32 King V",
            price: 28350,
            image: "https://muztorg.ua/image/cache/catalog/99995/229200/229200_jackson_js32_ah_king_v_1-1200x800.jpg"
        },
        {
            id: 2,
            name: "Електрогітара GIBSON FLYING V 70s CLASSIC WHITE",
            price: 80000,
            image: "https://muztorg.ua/image/cache/catalog/99994/231176/231176_1-1200x800.jpg"
        },
        {
            id: 3,
            name: "Гітарний комбопідсилювач BOSS KATANA 50 GEN 3",
            price: 25578,
            image: "https://muztorg.ua/image/cache/catalog/99991/236535/236535_bo-0461_boss_katana-50_gen_3_1-1200x800.jpg"
        },
        {
            id: 4,
            name: "Педаль ефектів IBANEZ TS9 TUBESCREAMER",
            price: 5625,
            image: "https://muztorg.ua/image/cache/catalog/99991/70779/70779_113-1200x800.jpg"
        },
        {
            id: 5,
            name: "Електрогітара FENDER PLAYER II MODIFIED STRATOCASTER HSS MN 3 COLOR SUNBURST",
            price: 63000,
            image: "https://muztorg.ua/image/cache/catalog/99995/301689/301689_fender_player-ii-modified-stratocaster-hss_3-color-sunburst_1-1200x800.jpg"
        },
        {
            id: 6,
            name: "Електрогітара JACKSON PRO SERIES RHOADS RRT-5 GLOSS BLACK",
            price: 63000,
            image: "https://muztorg.ua/image/cache/catalog/99995/302130/302130_jackson_pro_series_rhoads_rrt-5_gloss_black_1-1200x800.jpg"
        }
    ];

    return (
        <section className="gallery-section">
            <h2 className="gallery-heading">Галерея музичних товарів</h2>
            <div className="goods-grid">
                {products.map((item) => (
                    <GoodsCard 
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default GoodsGallery;