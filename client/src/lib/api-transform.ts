/**
 * Utility functions to transform API responses to match frontend types
 */

export function transformHotel(hotel: any) {
  if (!hotel) return hotel;

  return {
    ...hotel,
    location: {
      address: hotel.address?.line1 || '',
      city: hotel.address?.city || '',
      state: hotel.address?.state || '',
      country: hotel.address?.country || '',
      postalCode: hotel.address?.postalCode || '',
      coordinates: {
        lat: hotel.location?.coordinates?.[1] || 0,
        lng: hotel.location?.coordinates?.[0] || 0,
      },
    },
    ownerId: hotel.owner?._id || hotel.owner || '',
  };
}

export function transformRoom(room: any) {
  if (!room) return room;

  return {
    ...room,
    hotelId: room.hotel?._id || room.hotel || '',
    roomNumber: room.name || '',
    roomType: room.type?.toLowerCase() || 'single',
    basePrice: room.price || 0,
    isAvailable: room.availability !== undefined ? room.availability : true,
    beds: room.bedConfiguration || [],
    sizeUnit: 'sqft' as const,
  };
}

export function transformBooking(booking: any) {
  if (!booking) return booking;

  return {
    ...booking,
    hotelId: booking.hotel?._id || booking.hotel || '',
    hotelName: booking.hotel?.name || '',
    roomId: booking.room?._id || booking.room || '',
    roomType: booking.room?.type || booking.room?.name || '',
    guestId: booking.user?._id || booking.user || '',
    guestName: booking.guestDetails?.fullName || booking.user?.name || '',
    guestEmail: booking.guestDetails?.email || booking.user?.email || '',
    guestPhone: booking.guestDetails?.phone || '',
    numberOfNights: booking.pricing?.numberOfNights || 0,
    totalAmount: booking.pricing?.total || 0,
    paymentStatus: booking.payment?.status || 'pending',
    bookingStatus: booking.status || 'confirmed',
  };
}

export function transformReview(review: any) {
  if (!review) return review;

  return {
    ...review,
    hotelId: review.hotel?._id || review.hotel || '',
    userId: review.user?._id || review.user || '',
    userName: review.displayName || review.user?.name || 'Anonymous',
    userAvatar: review.user?.avatar,
    overallRating: review.ratings?.overall || 0,
    reviewText: review.comment || '',
    stayDate: review.createdAt || '',
    helpfulVotes: review.helpful || 0,
  };
}

export function transformHotelArray(hotels: any[]) {
  return hotels?.map(transformHotel) || [];
}

export function transformRoomArray(rooms: any[]) {
  return rooms?.map(transformRoom) || [];
}

export function transformBookingArray(bookings: any[]) {
  return bookings?.map(transformBooking) || [];
}

export function transformReviewArray(reviews: any[]) {
  return reviews?.map(transformReview) || [];
}
