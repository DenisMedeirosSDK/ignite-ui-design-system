import {
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastClose,
} from './styles';
import * as ToastRadix from '@radix-ui/react-toast';
import { X } from 'phosphor-react';

export interface ToastProps {
  title: string;
  description: string;
}

export function Toast({ title, description }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastContainer>
        <ToastTitle size="xl">{title}</ToastTitle>
        <ToastDescription size="sm">{description}</ToastDescription>
        <ToastRadix.Close asChild>
          <ToastClose>
            <X size={20} color="#A9A9B2" />
          </ToastClose>
        </ToastRadix.Close>
      </ToastContainer>
      <ToastViewport />
    </ToastRadix.Provider>
  );
}
