export interface StockData {
  price: string;
  change: string;
  changePercent: string;
  marketOpenAt: string;
  dailyHigh: string;
  dailyLow: string;
}

export interface PressRelease {
  title: string;
  link: string;
}

export interface PressReleases {
  investors: PressRelease[];
  media: PressRelease[];
}

export interface NewsletterFormData {
  email: string;
}

export interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

export interface Announcement {
  date: string;
  title: string;
  subtitle: string;
}

export interface AnnouncementsCardProps {
  announcements: Announcement[];
}

export interface JobspeakCardProps {
  title: string;
  subtitle: string;
}
