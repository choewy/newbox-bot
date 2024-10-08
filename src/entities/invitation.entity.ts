import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { UserEntity } from './user.entity';

import { createForeignKeyConstraintName } from '@/constants';

@Entity({ name: 'invitation', comment: '초대' })
export class InvitationEntity {
  @PrimaryGeneratedColumn('uuid', { comment: '초대 PK' })
  readonly id: string;

  @Column({ type: 'varchar', length: 340, comment: '초대 이메일 계정' })
  email: string;

  @Column({ type: 'timestamp', comment: '만료일시' })
  expiredAt: Date;

  @Column({ type: 'boolean', default: false, comment: '사용여부' })
  isCompleted: boolean;

  @Column({ type: 'int', unsigned: true, nullable: true })
  userId: number;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ foreignKeyConstraintName: createForeignKeyConstraintName('invitation', 'user', 'id') })
  user: UserEntity;

  @CreateDateColumn({ type: 'timestamp', comment: '생성일시' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일시' })
  readonly updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', comment: '삭제일시' })
  readonly deletedAt: Date | null;
}
