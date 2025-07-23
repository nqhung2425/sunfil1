export type Service = {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const services: Service[] = [
    {
        id: "service1",
        title: 'Miễn phí vận chuyển',
        description: 'Với hoá đơn từ 1 triệu',
        icon: '/icons/money.svg',
    },
    {
        id: "service2",
        title: 'Hỗ trợ 24/7',
        description: 'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm',
        icon: '/icons/support.svg',
    },
    {
        id: "service3",
        title: 'Giao hàng nhanh 2h',
        description: 'Trong vòng bán kính 10km nội thành TP HCM',
        icon: '/icons/delivery.svg',
    },
    {
        id: "service4",
        title: '30 ngày đổi trả',
        description: 'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển',
        icon: '/icons/package.svg',
    },
];
