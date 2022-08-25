class User < ApplicationRecord
    has_many :leaderboards
    has_many :games, through: :leaderboards
    validates :username, presence: true
    validates :password, presence: true
    has_secure_password
end
