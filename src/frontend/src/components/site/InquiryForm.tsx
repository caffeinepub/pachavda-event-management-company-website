import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';
import SubmissionAlert from './SubmissionAlert';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { SiWhatsapp } from 'react-icons/si';

interface InquiryFormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
}

interface InquiryFormProps {
  onSuccess?: () => void;
}

export default function InquiryForm({ onSuccess }: InquiryFormProps) {
  const [eventType, setEventType] = useState('');
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InquiryFormData>();
  const { mutate: submitInquiry, isPending, isSuccess, isError, error } = useSubmitInquiry();

  const onSubmit = (data: InquiryFormData) => {
    const formData = { ...data, eventType };
    submitInquiry(formData, {
      onSuccess: () => {
        setSubmittedData(formData);
        reset();
        setEventType('');
        onSuccess?.();
      },
    });
  };

  const handleWhatsAppContinue = () => {
    if (submittedData) {
      const whatsappUrl = generateWhatsAppLink(submittedData);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div>
      {isSuccess && submittedData && (
        <div className="mb-6 space-y-4">
          <SubmissionAlert
            type="success"
            title="Inquiry Submitted Successfully!"
            message="Thank you for your interest. We'll get back to you shortly."
          />
          <Button
            onClick={handleWhatsAppContinue}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <SiWhatsapp className="mr-2 h-5 w-5" />
            Continue on WhatsApp
          </Button>
        </div>
      )}

      {isError && (
        <div className="mb-6">
          <SubmissionAlert
            type="error"
            title="Submission Failed"
            message={error?.message || 'Something went wrong. Please try again.'}
          />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className="mt-1"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?[\d\s-()]+$/,
                message: 'Please enter a valid phone number',
              },
            })}
            placeholder="+91 98765 43210"
            className="mt-1"
          />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label htmlFor="eventType">Event Type *</Label>
          <Select value={eventType} onValueChange={setEventType} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Wedding">Wedding</SelectItem>
              <SelectItem value="Birthday">Birthday</SelectItem>
              <SelectItem value="Anniversary">Anniversary</SelectItem>
              <SelectItem value="Corporate Event">Corporate Event</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {!eventType && errors.eventType && (
            <p className="text-sm text-red-600 mt-1">Event type is required</p>
          )}
        </div>

        <div>
          <Label htmlFor="eventDate">Event Date *</Label>
          <Input
            id="eventDate"
            type="date"
            {...register('eventDate', { required: 'Event date is required' })}
            className="mt-1"
          />
          {errors.eventDate && <p className="text-sm text-red-600 mt-1">{errors.eventDate.message}</p>}
        </div>

        <div>
          <Label htmlFor="location">Event Location *</Label>
          <Input
            id="location"
            {...register('location', { required: 'Location is required' })}
            placeholder="City or venue"
            className="mt-1"
          />
          {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>}
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Tell us more about your event..."
            rows={4}
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-dark" disabled={isPending || !eventType}>
          {isPending ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </form>
    </div>
  );
}
