let productos = [{
    id: 1,
    descripcion: "Motherboard Asrock B450",
    tipo: "mobo",
    socket: "AM4",
    precio: 12000,
    imagen:  '/img/mobo/mother_asrock_b450.jpg',
    cantidad: 1
}, {
    id: 2,
    descripcion: "Motherboard Gigabyte A520",
    tipo: "mobo",
    socket: "AM4",
    precio: 25000,
    imagen:  '/img/mobo/mother_gigabyte_a520.jpg',
    cantidad: 1
}, {
    id: 3,
    descripcion: "Motherboard Asus Rog X570",
    tipo: "mobo",
    socket: "1200",
    precio: 45000,
    imagen:  '/img/mobo/mother_asusrog_x570.jpg',
    cantidad: 1
}, {
    id: 4,
    descripcion: "Microprocesador Ryzen 5 3600",
    tipo: "cpu",
    gpu: "n/a",
    precio: 25000,
    imagen: '/img/cpu/cpu_amd_ryzen5_3600_am4.jpg',
    cantidad: 1
}, {
    id: 5,
    descripcion: "Microprocesador Ryzen 5 Pro 3350g",
    tipo: "cpu",
    gpu: "integrada",
    precio: 13000,
    imagen: '/img/cpu/cpu_amd_ryzen5_pro3350g.jpg',
    cantidad: 1
}, {
    id: 6,
    descripcion: "Microprocesador Intel I9 10900K",
    tipo: "cpu",
    gpu: "integrada",
    precio: 50000,
    imagen: '/img/cpu/cpu_intel_i9_10900k.jpg',
    cantidad: 1
}, {
    id: 7,
    descripcion: "Disco Sólido SSD M.2 HP 120GB",
    tipo: "ssd",
    precio: 7000,
    imagen: '/img/ssd/ssd_hp_m2_120gb.jpg',
    cantidad: 1
}, {
    id: 8,
    descripcion: "Disco Sólido SSD Patriot 1TB P210",
    tipo: "ssd",
    precio: 14000,
    imagen: '/img/ssd/ssd_patriot_p210_1tb.jpg',
    cantidad: 1
}, {
    id: 9,
    descripcion: "Disco Sólido SSD NMVE T-Create 2TB",
    tipo: "ssd",
    precio: 25000,
    imagen: '/img/ssd/ssd_tcreate_nmve_2tb.jpg',
    cantidad: 1
}, {
    id: 10,
    descripcion: "Placa de Video XFX Radeon RX 550 4GB",
    tipo: "gpu",
    precio: 45000,
    imagen: '/img/gpu/gpu_radeon_rx550_4gb.jpg',
    cantidad: 1
}, {
    id: 11,
    descripcion: "Placa de Video ASUS GeForce RTX 3060 12GB",
    tipo: "gpu",
    precio: 173000,
    imagen: '/img/gpu/gpu_asus_rtx3060_12gb.jpg',
    cantidad: 1
}, {
    id: 12,
    descripcion: "Placa de Video ASUS GeForce RTX 3090 24GB",
    tipo: "gpu",
    precio: 540000,
    imagen: '/img/gpu/gpu_asus_rtx3090_24gb.jpg',
    cantidad: 1
    
}, {
    id: 13,
    descripcion: "Memoria Hikvision DDR4 4GB 2666MHz",
    tipo: "ram",
    precio: 3600,
    imagen: '/img/ram/ram_hikvision_ddr4_4gb.jpg',
    cantidad: 1
}, {
    id: 14,
    descripcion: "Memoria Team DDR4 8GB 3200MHz",
    tipo: "ram",
    precio: 7900,
    imagen: '/img/ram/ram_team_ddr4_8gb.jpg',
    cantidad: 1
}, {
    id: 15,
    descripcion: "Memoria PNY DDR4 16GB 3200MHz",
    tipo: "ram",
    precio: 11000,
    imagen: '/img/ram/ram_pny_ddr4_16gb.jpg',
    cantidad: 1
}, {
    id: 16,
    descripcion: "Fuente Segotep 500W ATX",
    tipo: "psu",
    precio: 1200,
    imagen: '/img/psu/psu_segotep_500w.jpg',
    cantidad: 1
}, {
    id: 17,
    descripcion: "Fuente Gigabyte 650W 80 Plus Bronze",
    tipo: "psu",
    precio: 8000,
    imagen: '/img/psu/psu_gigabyte_650w_80b.jpg',
    cantidad: 1
}, {
    id: 18,
    descripcion: "Fuente ASUS ROG STRIX 80 Plus Gold 650W",
    tipo: "psu",
    precio: 15000,
    imagen: '/img/psu/psu_asusrogstrix_650w_modular.jpg',
    cantidad: 1
}, {
    id: 19,
    descripcion: "Gabinete Sentey F10 RGB M-ATX",
    tipo: "gabo",
    precio: 10000,
    imagen: '/img/gabo/gabo_sentey_f10_matx.jpg',
    cantidad: 1
}, {
    id: 20,
    descripcion: "Gabinete Deepcool MACUBE310P",
    tipo: "gabo",
    precio: 25000,
    imagen: '/img/gabo/gabo_deepcool_macube310p_atx.jpg',
    cantidad: 1
}, {
    id: 21,
    descripcion: "Gabinete Cougar Conquer Aluminum",
    tipo: "gabo",
    precio: 45000,
    imagen: '/img/gabo/gabo_cougar_conqueraluminium_custom.jpg',
    cantidad: 1
}]

let productosOriginal = [{
    id: 1,
    descripcion: "Motherboard Asrock B450",
    tipo: "mobo",
    socket: "AM4",
    precio: 12000,
    imagen:  '/img/mobo/mother_asrock_b450.jpg',
    cantidad: 1
}, {
    id: 2,
    descripcion: "Motherboard Gigabyte A520",
    tipo: "mobo",
    socket: "AM4",
    precio: 25000,
    imagen:  '/img/mobo/mother_gigabyte_a520.jpg',
    cantidad: 1
}, {
    id: 3,
    descripcion: "Motherboard Asus Rog X570",
    tipo: "mobo",
    socket: "1200",
    precio: 45000,
    imagen:  '/img/mobo/mother_asusrog_x570.jpg',
    cantidad: 1
}, {
    id: 4,
    descripcion: "Microprocesador Ryzen 5 3600",
    tipo: "cpu",
    gpu: "n/a",
    precio: 25000,
    imagen: '/img/cpu/cpu_amd_ryzen5_3600_am4.jpg',
    cantidad: 1
}, {
    id: 5,
    descripcion: "Microprocesador Ryzen 5 Pro 3350g",
    tipo: "cpu",
    gpu: "integrada",
    precio: 13000,
    imagen: '/img/cpu/cpu_amd_ryzen5_pro3350g.jpg',
    cantidad: 1
}, {
    id: 6,
    descripcion: "Microprocesador Intel I9 10900K",
    tipo: "cpu",
    gpu: "integrada",
    precio: 50000,
    imagen: '/img/cpu/cpu_intel_i9_10900k.jpg',
    cantidad: 1
}, {
    id: 7,
    descripcion: "Disco Sólido SSD M.2 HP 120GB",
    tipo: "ssd",
    precio: 7000,
    imagen: '/img/ssd/ssd_hp_m2_120gb.jpg',
    cantidad: 1
}, {
    id: 8,
    descripcion: "Disco Sólido SSD Patriot 1TB P210",
    tipo: "ssd",
    precio: 14000,
    imagen: '/img/ssd/ssd_patriot_p210_1tb.jpg',
    cantidad: 1
}, {
    id: 9,
    descripcion: "Disco Sólido SSD NMVE T-Create 2TB",
    tipo: "ssd",
    precio: 25000,
    imagen: '/img/ssd/ssd_tcreate_nmve_2tb.jpg',
    cantidad: 1
}, {
    id: 10,
    descripcion: "Placa de Video XFX Radeon RX 550 4GB",
    tipo: "gpu",
    precio: 45000,
    imagen: '/img/gpu/gpu_radeon_rx550_4gb.jpg',
    cantidad: 1
}, {
    id: 11,
    descripcion: "Placa de Video ASUS GeForce RTX 3060 12GB",
    tipo: "gpu",
    precio: 173000,
    imagen: '/img/gpu/gpu_asus_rtx3060_12gb.jpg',
    cantidad: 1
}, {
    id: 12,
    descripcion: "Placa de Video ASUS GeForce RTX 3090 24GB",
    tipo: "gpu",
    precio: 540000,
    imagen: '/img/gpu/gpu_asus_rtx3090_24gb.jpg',
    cantidad: 1
    
}, {
    id: 13,
    descripcion: "Memoria Hikvision DDR4 4GB 2666MHz",
    tipo: "ram",
    precio: 3600,
    imagen: '/img/ram/ram_hikvision_ddr4_4gb.jpg',
    cantidad: 1
}, {
    id: 14,
    descripcion: "Memoria Team DDR4 8GB 3200MHz",
    tipo: "ram",
    precio: 7900,
    imagen: '/img/ram/ram_team_ddr4_8gb.jpg',
    cantidad: 1
}, {
    id: 15,
    descripcion: "Memoria PNY DDR4 16GB 3200MHz",
    tipo: "ram",
    precio: 11000,
    imagen: '/img/ram/ram_pny_ddr4_16gb.jpg',
    cantidad: 1
}, {
    id: 16,
    descripcion: "Fuente Segotep 500W ATX",
    tipo: "psu",
    precio: 1200,
    imagen: '/img/psu/psu_segotep_500w.jpg',
    cantidad: 1
}, {
    id: 17,
    descripcion: "Fuente Gigabyte 650W 80 Plus Bronze",
    tipo: "psu",
    precio: 8000,
    imagen: '/img/psu/psu_gigabyte_650w_80b.jpg',
    cantidad: 1
}, {
    id: 18,
    descripcion: "Fuente ASUS ROG STRIX 80 Plus Gold 650W",
    tipo: "psu",
    precio: 15000,
    imagen: '/img/psu/psu_asusrogstrix_650w_modular.jpg',
    cantidad: 1
}, {
    id: 19,
    descripcion: "Gabinete Sentey F10 RGB M-ATX",
    tipo: "gabo",
    precio: 10000,
    imagen: '/img/gabo/gabo_sentey_f10_matx.jpg',
    cantidad: 1
}, {
    id: 20,
    descripcion: "Gabinete Deepcool MACUBE310P",
    tipo: "gabo",
    precio: 25000,
    imagen: '/img/gabo/gabo_deepcool_macube310p_atx.jpg',
    cantidad: 1
}, {
    id: 21,
    descripcion: "Gabinete Cougar Conquer Aluminum",
    tipo: "gabo",
    precio: 45000,
    imagen: '/img/gabo/gabo_cougar_conqueraluminium_custom.jpg',
    cantidad: 1
}]