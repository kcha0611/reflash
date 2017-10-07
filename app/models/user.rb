class User < ApplicationRecord
  validates :user_name, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: :true }

  has_many :photos
  has_many :collections
  has_many :likes

  attr_reader :password

  before_validation :ensure_session_token

  def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
  end

   def self.find_by_credentials(user_name, password)
     user = User.find_by_user_name(user_name)
     return nil if user.nil?
     user.is_password?(password) ? user : nil
   end

   def is_password?(password)
     BCrypt::Password.new(self.password_digest).is_password?(password)
   end

   def ensure_session_token
     self.session_token ||= SecureRandom::urlsafe_base64
   end

   def reset_token!
     self.session_token = SecureRandom::urlsafe_base64
     self.save!
   end

end
