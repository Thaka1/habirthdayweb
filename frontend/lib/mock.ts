import type { Photo, Moment, Song, Video, MockData } from './types';

export const mockData: MockData = {
  person: {
    name: 'Nguyễn Ngọc Hà',
    nickname: 'Hà',
    fromName: 'The one who always loves you',
    // Hà's birthday — REPLACE with her actual date (YYYY-MM-DDTHH:mm:ss local 24h)
    birthdayDate: '2026-12-25T00:00:00',
  },

  music: {
    url: 'https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3',
    title: 'Our Song',
    artist: 'For Hà',
  },

  photos: [
    { id: 1, url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=80', caption: 'Your smile', date: '2024' },
    { id: 2, url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1000&q=80', caption: 'A quiet afternoon', date: '2024' },
    { id: 3, url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1000&q=80', caption: "When we're together", date: '2023' },
    { id: 4, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80', caption: 'Our first celebration', date: '2023' },
    { id: 5, url: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=1000&q=80', caption: 'The sound of your laugh', date: '2022' },
    { id: 6, url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1000&q=80', caption: 'Under the sunlight', date: '2022' },
  ] satisfies Photo[],

  letter: {
    title: 'A Letter For You',
    content: `My dearest Hà,

Today is the most special day of the year — the day the world got you.

Thank you for showing up, for staying, for choosing me among a million possibilities. Every day with you I learn that love is not a grand thing — it's the tiny ones: a morning text, a soft glance, the way you sulk and then forgive me minutes later.

I hope this year brings you endless joy, good health, safe days, and a lot of being loved — especially by me.

I love you — yesterday, today, and every day after.`,
    signature: '— Yours, always ♡',
  },

  moments: [
    { id: 1, title: 'The day we met', description: 'The first time I saw you, my heart skipped.', date: 'January 2020', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80' },
    { id: 2, title: 'Our first trip', description: "We traveled far, and I knew I'd walk with you much further.", date: 'June 2020', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80' },
    { id: 3, title: 'Sleepless nights', description: 'We talked till sunrise, and I fell for you a little more after every sentence.', date: 'December 2021', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80' },
    { id: 4, title: 'A surprise party', description: 'I quietly planned it, and your smile was the only reward I needed.', date: 'March 2022', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80' },
    { id: 5, title: 'Weekend escape', description: 'An unplanned drive — just you, me, and the road.', date: 'August 2023', image: 'https://images.unsplash.com/photo-1476900966873-4f831b77e31a?w=800&q=80' },
    { id: 6, title: 'And all the small things', description: 'Every single day with you is a milestone worth remembering.', date: 'November 2024', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
  ] satisfies Moment[],

  songs: [
    { id: 1, title: 'Perfect', artist: 'Ed Sheeran', duration: '4:23' },
    { id: 2, title: 'All of Me', artist: 'John Legend', duration: '4:29' },
    { id: 3, title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41' },
    { id: 4, title: 'Better Together', artist: 'Jack Johnson', duration: '3:28' },
    { id: 5, title: "Can't Help Falling in Love", artist: 'Elvis Presley', duration: '3:02' },
  ] satisfies Song[],

  videos: [
    { id: 1, title: 'A message for you', thumbnail: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80', duration: '2:14' },
    { id: 2, title: 'Moments of 2024', thumbnail: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80', duration: '3:08' },
    { id: 3, title: 'A little surprise', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', duration: '1:45' },
    { id: 4, title: 'Us, a while ago', thumbnail: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80', duration: '2:52' },
  ] satisfies Video[],
};
