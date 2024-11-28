class UserPassword < ApplicationRecord
  belongs_to :user
  belongs_to :password

  # validates :user_id, presence: true
  # validates :password_id, presence: true
end
