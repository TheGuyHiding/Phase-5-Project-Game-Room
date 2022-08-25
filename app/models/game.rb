class Game < ApplicationRecord
    has_many :leaderboards
    has_many :users, through: :leaderboards
end
