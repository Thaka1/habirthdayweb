// All content personalized for Nguyễn Ngọc Hà.
// Anh có thể chỉnh sửa bất kỳ giá trị nào bên dưới (tên, lời đề tựa, ảnh, nhạc, mật khẩu, ngày sinh nhật).

export const mockData = {
  person: {
    name: "Nguyễn Ngọc Hà",
    nickname: "Hà",
    fromName: "Người luôn yêu em",
    // Hà's birthday — REPLACE with her actual date (YYYY-MM-DDTHH:mm:ss, 24h local time)
    birthdayDate: "2026-12-25T00:00:00",
  },

  gate: {
    // Romantic password gate. Lowercase, no accents. Replace with something only Hà knows.
    password: "hayeuanh",
    hint: 'Hãy gõ câu anh nói với em mỗi tối — không dấu, viết liền (vd: "hayeuanh")',
    welcome: "Anh đã giấu một điều đặc biệt ở đây — chỉ dành cho em.",
  },

  music: {
    // Romantic background track. Replace with any MP3 URL you want.
    url: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
    title: "Bản nhạc của chúng ta",
    artist: "Dành riêng cho Hà",
  },

  photos: [
    { id: 1, url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=80", caption: "Nụ cười của em", date: "2024" },
    { id: 2, url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1000&q=80", caption: "Một buổi chiều bình yên", date: "2024" },
    { id: 3, url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1000&q=80", caption: "Khi mình bên nhau", date: "2023" },
    { id: 4, url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80", caption: "Lần đầu ta cùng ăn mừng", date: "2023" },
    { id: 5, url: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=1000&q=80", caption: "Tiếng cười của em", date: "2022" },
    { id: 6, url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1000&q=80", caption: "Dưới ánh nắng", date: "2022" },
  ],

  letter: {
    title: "Lá thư anh gửi em",
    content: `Gửi Hà của anh,

Hôm nay là ngày đặc biệt nhất trong năm — ngày thế giới có em.

Cảm ơn em vì đã xuất hiện, vì đã ở lại, vì đã chọn anh giữa muôn vàn lựa chọn. Mỗi ngày bên em, anh học được rằng tình yêu không phải là điều gì lớn lao — nó là những điều nhỏ xíu: một tin nhắn buổi sáng, một cái nhìn khẽ cười, và cả những lần em giận dỗi rồi lại làm lành.

Chúc em sinh nhật thật nhiều niềm vui. Mong năm nay em sẽ khỏe mạnh, bình an, và luôn được yêu — nhất là bởi anh.

Anh yêu em, hôm qua, hôm nay, và cả những ngày sắp tới.`,
    signature: "— Anh ♡",
  },

  moments: [
    { id: 1, title: "Ngày mình gặp nhau", description: "Lần đầu anh nhìn thấy em, tim anh đã lỡ một nhịp.", date: "Tháng 01, 2020", image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80" },
    { id: 2, title: "Chuyến đi đầu tiên", description: "Mình đã cùng nhau đi xa, và anh biết mình sẽ đi cùng em rất lâu nữa.", date: "Tháng 06, 2020", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80" },
    { id: 3, title: "Những đêm không ngủ", description: "Hai đứa nói chuyện đến tận sáng, và anh yêu em nhiều hơn sau mỗi câu.", date: "Tháng 12, 2021", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80" },
    { id: 4, title: "Bữa tiệc bất ngờ", description: "Anh đã lén chuẩn bị, và nụ cười của em là phần thưởng lớn nhất.", date: "Tháng 03, 2022", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80" },
    { id: 5, title: "Cuối tuần cùng nhau", description: "Một chuyến đi không kế hoạch — chỉ có em, anh, và con đường.", date: "Tháng 08, 2023", image: "https://images.unsplash.com/photo-1476900966873-4f831b77e31a?w=800&q=80" },
    { id: 6, title: "Và tất cả điều nhỏ bé", description: "Mỗi ngày bên em đều là một mốc đáng nhớ.", date: "Tháng 11, 2024", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  ],

  songs: [
    { id: 1, title: "Em Của Ngày Hôm Qua", artist: "Sơn Tùng M-TP", duration: "4:02" },
    { id: 2, title: "Anh Nhớ Em", artist: "Mr. Siro", duration: "4:41" },
    { id: 3, title: "Perfect", artist: "Ed Sheeran", duration: "4:23" },
    { id: 4, title: "Yêu Em Dài Lâu", artist: "Đức Phúc", duration: "4:15" },
    { id: 5, title: "All of Me", artist: "John Legend", duration: "4:29" },
  ],

  videos: [
    { id: 1, title: "Lời chúc gửi em", thumbnail: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80", duration: "2:14" },
    { id: 2, title: "Những khoảnh khắc năm 2024", thumbnail: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80", duration: "3:08" },
    { id: 3, title: "Bất ngờ nhỏ cho em", thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", duration: "1:45" },
    { id: 4, title: "Mình của một ngày xưa", thumbnail: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80", duration: "2:52" },
  ],
};
