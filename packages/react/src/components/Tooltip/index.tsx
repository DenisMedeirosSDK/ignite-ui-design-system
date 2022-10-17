import * as TooltipRadix from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import { StyledContent } from './styles';
import { Text } from '../Text';

export interface TooltipProps {
  title: string;
  children: ReactNode;
}

export function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <StyledContent sideOffset={5}>
            <Text size="sm">{title}</Text>
          </StyledContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
