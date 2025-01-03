export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  links?: Array<{
    text: string;
    href: string;
  }>;
  color: string
}

export interface SlideProps extends SlideData {
  isActive: boolean;
  total: number;
  index: number;
}

export interface SlideControlsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}
