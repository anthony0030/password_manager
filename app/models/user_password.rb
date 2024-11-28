class UserPassword < ApplicationRecord
  # * Viewer can only view the password
  # * Editor can update the password
  # * Owner can view, edit, and share the password

  ROLES = ['viewer', 'editor', 'owner']
  belongs_to :user
  belongs_to :password

  # validates :user_id, presence: true
  # validates :password_id, presence: true

  validates :role, presence: true, inclusion: { in: ROLES }

  attribute :role, default: :viewer

  def owner?
    role == 'owner'
  end

  def editor?
    role == 'editor'
  end

  def viewer?
    role == 'viewer'
  end

  def editable?
    owner? || editor?
  end

  def sharable?
    owner?
  end

  def deletable?
    owner?
  end
end
