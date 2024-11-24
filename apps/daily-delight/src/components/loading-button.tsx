import { Button, ButtonProps } from '@shared/ui/button';
import { Loader2 } from 'lucide-react';

type Props = ButtonProps & { icon: React.ReactNode };

export const LoadingButton = (props: Props) => {
  return (
    <Button {...props} className="rounded-[18px]">
      {props.disabled ? <Loader2 className="animate-spin" /> : props.icon}
      {props.children}
    </Button>
  );
};
