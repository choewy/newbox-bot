import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { FulfillmentCenterEntity } from './fulfillment-center.entity';

@Entity({ name: 'location', comment: '로케이션' })
export class LocationEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, comment: '로케이션 PK' })
  readonly id: number;

  @Column({ type: 'varchar', length: 20, comment: '로케이션 코드' })
  code: string;

  @Column({ type: 'varchar', length: 20, comment: '로케이션 이름' })
  name: string;

  @ManyToOne(() => FulfillmentCenterEntity, (e) => e.locations, { nullable: true, onDelete: 'SET NULL' })
  fulfillmentCenter: FulfillmentCenterEntity;

  @CreateDateColumn({ type: 'timestamp', comment: '생성일시' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일시' })
  readonly updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', comment: '삭제일시' })
  readonly deletedAt: Date | null;
}