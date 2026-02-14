import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface SubmissionAlertProps {
  type: 'success' | 'error';
  title: string;
  message: string;
}

export default function SubmissionAlert({ type, title, message }: SubmissionAlertProps) {
  return (
    <Alert variant={type === 'error' ? 'destructive' : 'default'} className={type === 'success' ? 'border-green-500 bg-green-50' : ''}>
      {type === 'success' ? (
        <CheckCircle className="h-4 w-4 text-green-600" />
      ) : (
        <AlertCircle className="h-4 w-4" />
      )}
      <AlertTitle className={type === 'success' ? 'text-green-900' : ''}>{title}</AlertTitle>
      <AlertDescription className={type === 'success' ? 'text-green-800' : ''}>{message}</AlertDescription>
    </Alert>
  );
}
